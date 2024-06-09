document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('#search-button');
    const searchInput = document.querySelector('#search-input');
    const projectsContainer = document.querySelector('.projects-container');
    const sidebar = document.querySelector('.sidebar');
    const toggleSidebarButton = document.querySelector('.toggle-sidebar-button');

    const projects = [
        { name: 'Project 1', description: 'Description' },
        { name: 'Project 2', description: 'Description' },
        { name: 'Project 3', description: 'Description' }
    ];

    function loadProjects(projects) {
        projectsContainer.innerHTML = projects.map(project => `
            <div class="project-item">
                <div class="project-name">${project.name}</div>
                <div class="project-description">${project.description}</div>
            </div>
        `).join('');
    }

    function filterProjects(query) {
        const filteredProjects = projects.filter(project =>
            project.name.toLowerCase().includes(query.toLowerCase())
        );
        loadProjects(filteredProjects);
    }

    searchButton.addEventListener('click', function () {
        const query = searchInput.value;
        filterProjects(query);
    });

    searchInput.addEventListener('input', debounce(function (e) {
        const query = e.target.value;
        filterProjects(query);
    }, 300));

    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Load initial projects
    loadProjects(projects);

    if (toggleSidebarButton) {
        toggleSidebarButton.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });
    }
});
