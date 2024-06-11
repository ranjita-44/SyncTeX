import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        socket.on('projectCreated', (projectId) => {
            console.log('New Project ID:', projectId);
            navigate(`/project/${projectId}`);
        });

        fetch('http://localhost:3001/api/projects')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });

        return () => {
            socket.off('projectCreated');
        };
    }, [navigate]);

    const createNewProject = () => {
        socket.emit('createProject');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Your Projects</h1>
            <button onClick={createNewProject}>Create New Project</button>
            <ul>
                {projects.map((project) => (
                    <li key={project.id} onClick={() => navigate(`/project/${project.id}`)}>
                        {project.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
