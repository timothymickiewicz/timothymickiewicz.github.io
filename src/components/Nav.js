import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navbar(props) {
  return (
    <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
            <Nav.Link onClick={() => {props.handleAboutClick()}} eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={() => {props.handleProjectsClick()}} eventKey="link-2">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={() => {props.handleSkillsClick()}}  eventKey="link-3">Skills</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}

export default Navbar;
