import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <div className="Resume">
            <h2>My Resume</h2>
            <p>You can view and download my resume using the link below:</p>
            <a href="path/to/resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
        </div>
    );
}

export default Resume;
