import React from 'react';
import {Link} from 'react-router-dom';
import {Router} from "react-router";
import Card from 'react-bootstrap/Card'
import "../../style/projects.css"
var info = require('../../assets/projects.json');
console.log(info);

function Projects() {
  return (
    <div className="wrap">
        {Object.keys(info).map((project) => (
          <Card className="card" key={info[project].title}>
            <Card.Img className="minHeight" variant="top" onMouseOver={e => (e.currentTarget.src = info[project].mouseOver)} onMouseLeave={e => (e.currentTarget.src = info[project].mouseLeave)} src={info[project].src} />
          <Card.Body>
            <a target="_blank" rel="noopener noreferrer" href={info[project].github} className="left">See the Code</a>
            <a target="_blank" rel="noopener noreferrer" href={(info[project].live !== undefined) ? (info[project].live) : (void(0))} className={(info[project].live !== undefined) ? ("right") : ("cli")}>{(info[project].live !== undefined) ? ("See it Live") : ("CLI Only")}</a>
            <Card.Title>{info[project].title}</Card.Title>
            <Card.Text>
              {info[project].text}
            </Card.Text>
          </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default Projects;