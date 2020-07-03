import React from 'react';
import Table from 'react-bootstrap/Table'
import "../../style/skills.css"

function Skills() {
  return (
    <Table responsive striped bordered variant="dark">
      <thead>
        <tr>
          <th className="header">Languages</th>
          <th className="header">Libraries</th>
          <th className="header">Technologies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>HTML5</td>
          <td>React</td>
          <td>Google API Library</td>
        </tr>
        <tr>
          <td>CSS3</td>
          <td>Bootstrap</td>
          <td>Database APIs</td>
        </tr>
        <tr>
          <td>JavaScript</td>
          <td>jQuery</td>
          <td>Geolocation</td>
        </tr>
        <tr>
          <td>MySQL</td>
          <td>Sequelize</td>
          <td>Passport</td>
        </tr>
        <tr>
          <td>MongoDB</td>
          <td>Mongoose</td>
          <td>Express Servers</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Skills;