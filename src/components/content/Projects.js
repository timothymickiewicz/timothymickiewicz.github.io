import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import "../../style/projects.css"
// import { info } from "../../assets/projects.json"
// console.log(info)

function Projects(props) {
  console.log(props)
  return (
    <>
      <CardGroup>
        <Card>
            <Card.Img variant="top" onMouseOver={e => (e.currentTarget.src = `/assets/gifs/dineordash-min.gif`)} onMouseLeave={e => (e.currentTarget.src = `/assets/images/dineordash.png`)} name="dineordash" src="/assets/images/dineordash.png" />
          <Card.Body>
            <Card.Title>Dine-or-Dash</Card.Title>
            <Card.Text>
              A team developed application that lets the user browse restaurants based on their location or by entering a city. Restaurants can be liked or disliked as they come up. Liked restaurants will display on the `liked` page with more restaurant information and can be favorited or removed. `Favorited` restaurants are kept on the favorites page. Users must create an account and log in to use the application.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" onMouseOver={e => (e.currentTarget.src = `/assets/gifs/fittofailure-min.gif`)} onMouseLeave={e => (e.currentTarget.src = `/assets/images/fittofailure.png`)} name="fittofailure/" src="/assets/images/fittofailure.png" />
          <Card.Body>
            <Card.Title>Fit To Failure</Card.Title>
            <Card.Text>
              A solo developed full-stack application that keeps track of the user's workouts throughout the week. The last workout started can be added onto and everything is displaying on the dashboard for easy viewing!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" onMouseOver={e => (e.currentTarget.src = `/assets/gifs/quicknotes-min.gif`)} onMouseLeave={e => (e.currentTarget.src = `/assets/images/quicknotes.png`)} name="quicknotes" src="/assets/images/quicknotes.png" />
          <Card.Body>
            <Card.Title>Quick Notes</Card.Title>
            <Card.Text>
              A solo developed full stack application that allows a user to create notes. Notes are saved in a database and the user can revisit past notes by clicking on the note's headers on the sidebar.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
            <Card.Img variant="top" onMouseOver={e => (e.currentTarget.src = `/assets/gifs/manpower-min.gif`)} onMouseLeave={e => (e.currentTarget.src = `/assets/images/manpower.png`)} name="manpower" src="/assets/images/manpower.png" />
          <Card.Body>
            <Card.Title>Manpower</Card.Title>
            <Card.Text>
              A solo developed full stack application that uses React to dynamically display employee information. The results can be filtered as you type into the search bar, or sorted alphabetically/numerically.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" onMouseOver={e => (e.currentTarget.src = `/assets/gifs/branchmanager-min.gif`)} onMouseLeave={e => (e.currentTarget.src = `/assets/images/branchmanager.png`)} name="branchmanager" src="/assets/images/branchmanager.png" />
          <Card.Body>
            <Card.Title>Branch Manager</Card.Title>
            <Card.Text>
              A solo Node.js CLI application to generate team member information for your company. You are able to create a team consisting of a manager/managers, engineers, and interns with information such as: email addresses, employee IDs, names, github accounts, schools, and office numbers. The result is compiled into an HTML page to be viewed.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" onMouseOver={e => (e.currentTarget.src = `/assets/gifs/weatherdashboard-min.gif`)} onMouseLeave={e => (e.currentTarget.src = `/assets/images/weatherdashboard.png`)} name="weatherdashboard" src="/assets/images/weatherdashboard.png" />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              A solo developed full stack application to show the current weather of a city of the user's choice, as well as a 5 day forecast. The last entered location will be displayed first when the page loads.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default Projects;