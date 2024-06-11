
import React from 'react';

  <div className="after-login-page">
    <div className="sidebar">
      <div className="nav-logo">
        
      </div>
      <button className="menu-item" id="newProjectButton">
        New Projects
      </button>
      <div className="menu-item">Your Projects</div>
      <div className="menu-item">Shared Projects</div>
      <div className="menu-item">Deleted Projects</div>
      <div className="menu-item">All Projects</div>
    </div>
    <div className="main-content">
      <div className="header">
        <div className="nav-item">Features</div>
        <div className="nav-item">Logout</div>
      </div>
      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search in all projects"
            id="search-input"
          />
          <button id="search-button">Search</button>
        </div>
        <div className="project-list">
          <div className="project-title">ALL PROJECTS</div>
          <div className="projects-container"></div>
        </div>
      </div>
    </div>
  </div>

