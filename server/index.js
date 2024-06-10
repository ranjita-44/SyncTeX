const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/synctex', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const projectSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 },
    name: { type: String, required: true },
});

const Project = mongoose.model('Project', projectSchema);

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('createProject', async () => {
        try {
            const projectCount = await Project.countDocuments();
            const newProject = new Project({ name: `Project ${projectCount + 1}` });
            await newProject.save();
            socket.emit('projectCreated', newProject.id);
        } catch (error) {
            console.error('Error creating project:', error);
        }
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3001, () => {
    console.log('Server is running on port 3001');
});
