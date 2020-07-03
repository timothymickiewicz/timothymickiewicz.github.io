import React from 'react';
import Figure from 'react-bootstrap/Figure'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
function About() {
  return (
    <Jumbotron style={{minHeight: '100%', overflow: 'auto'}} fluid>
      <Container>
        <h1 style={{fontSize: '5vw'}}>Timothy Mickiewicz</h1>
        <Figure style={{display: "block"}}>
          <Figure.Image
            width={"40%"}
            height={"40%"}
            src="/assets/images/portfolio.png"
            style={{float: "right"}}
          />
        </Figure>
        <h2 style={{float: "left", maxWidth: "100%", display: "inline", marginTop: '1rem', fontSize: '3vw'}}>Full Stack Developer</h2>
        <p style={{float: "left", maxWidth: "50%", display: "inline", marginTop: '2rem', fontSize: '1.75vw'}}>
          A Full Stack web developer with a BS in Biology from Freed-Hardeman University. Currently employed as an Analytical Chemist, I grew an interest for coding while troubleshooting scripted extraction machinery and then took the intitiative to enroll in the Vanderbilt Full-Stack Web Develpment Bootcamp to develop my skill in this area. I have a passion for seamless functionality, and have participated in a range of successful collaborative projects as well as a variety of solo applications.
        </p>
      </Container>
    </Jumbotron>
  // <Card className="text-center">
  //   <Card.Header> Timothy Mickiewicz </Card.Header>
  //   <Figure>
  //     <Figure.Image
  //       width={"40%"}
  //       height={"40%"}
  //       src="/assets/images/portfolio.png"
  //       style={{float: "left"}}
  //     />
  //   </Figure>
  //   <Card.Body>
  //     <Card.Title> Full Stack Developer </Card.Title>
  //     <Card.Text>
  //       A Full-stack web developer with a BS in Science from Freed-Hardeman University. Currently employed as an Analytical Chemist, I grew an interest for coding while troubleshooting scripted extraction machinery and then took the intitiative to enroll in the Vanderbilt Full-Stack Web Develpment Bootcamp to develop my skill in this area. I have a passion for seamless functionality, and have participated in a range of successful collaborative projects as well as a variety of solo applications.
  //     </Card.Text>
  //   </Card.Body>
  // </Card>
  );
}

export default About;