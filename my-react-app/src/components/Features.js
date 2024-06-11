import React from 'react'
function Features() {
  return (
    <section id="features">
    <h2> { 'Features of SyncTex '} "</h2> 
    <section id="intro" class="section">
        <div class="content">
            <h1>Write, collaborate, and create with SyncTex</h1>
            <p>Discover how SyncTex empowers you to create, collaborate, and innovate with ease.</p>
            <button class="cta">Get Started</button>
        </div>
        <div class="image">
            <img src="placeholder-intro.png" alt="Intro Image"/>
        </div>
    </section>

    <section id="collaboration" class="section">
        <div class="image">
            <img src="placeholder-collab.png" alt="Collaboration Image"/>
        </div>
        <div class="content">
            <h2>Collaboration</h2>
            <p>Work seamlessly with your team in real-time, editing LaTeX documents together.</p>
            <ul>
                <li><i class="fas fa-users"></i> Real-time Collaboration</li>
                <li><i class="fas fa-edit"></i> Simultaneous Editing</li>
                <li><i class="fas fa-cursor"></i> Collaborative Cursors</li>
            </ul>
        </div>
    </section>

    <section id="productivity" class="section">
        <div class="content">
            <h2>Productivity</h2>
            <p>Access powerful LaTeX editing tools, including syntax highlighting, autocompletion, and more.</p>
            <ul>
                <li><i class="fas fa-code"></i> LaTeX Editing Tools</li>
                <li><i class="fas fa-file-alt"></i> Templates and Snippets</li>
                <li><i class="fas fa-sync-alt"></i> Auto-Compilation</li>
            </ul>
        </div>
        <div class="image">
            <img src="placeholder-productivity.png" alt="Productivity Image"/>
        </div>
    </section>

    <section id="flexibility" class="section">
        <div class="image">
            <img src="placeholder-flexibility.png" alt="Flexibility Image"/>
        </div>
        <div class="content">
            <h2>Flexibility</h2>
            <p>Enjoy seamless access to SyncTex from any device, whether desktop, tablet, or mobile.</p>
            <ul>
                <li><i class="fas fa-desktop"></i> Cross-Platform Compatibility</li>
                <li><i class="fas fa-wifi-slash"></i> Offline Mode</li>
                <li><i class="fas fa-cogs"></i> Customizable Workflows</li>
            </ul>
        </div>
    </section>

    <section id="security" class="section">
        <div class="content">
            <h2>Security</h2>
            <p>Rest assured with end-to-end encryption, keeping your documents and communications secure.</p>
            <ul>
                <li><i class="fas fa-lock"></i> End-to-End Encryption</li>
                <li><i class="fas fa-user-shield"></i> Access Controls</li>
                <li><i class="fas fa-history"></i> Revision History</li>
            </ul>
        </div>
        <div class="image">
            <img src="placeholder-security.png" alt="Security Image"/>
        </div>
    </section>

    <section id="cta" class="section">
        <h2>Ready to revolutionize your LaTeX editing experience?</h2>
        <button class="cta">Get Started with SyncTex</button>
    </section>
</section>
  )
}

export default Features;