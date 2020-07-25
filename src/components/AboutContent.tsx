import React from 'react';
import './AboutContent.css';

const AboutContent: React.FC = () => (
    <div className="container" color="primary">
        <h2 className="tx">Hi! My name is Timothy Mickiewicz.
        <hr></hr> 
        <span style={{"color": "#1C1C1C", "fontFamily": "'Rowdies', cursive"}}>Full Stack Developer</span>, <span style={{"color": "#dee1e1", "fontFamily": "'Rowdies', cursive"}}>Molecular Biologist</span>, <span style={{"color": "#1C1C1C", "fontFamily": "'Rowdies', cursive"}}>Perpetual Student</span></h2>
    </div>
);

export default AboutContent;