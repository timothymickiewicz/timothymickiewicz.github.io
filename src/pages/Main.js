import React, { Component } from 'react';
import About from '../components/content/About';
import Projects from '../components/content/Projects';
import Skills from '../components/content/Skills';
import Footer from '../components/Footer';
import Navbar from '../components/Nav';
import '../style/main.css'

class Main extends Component {
    constructor() {
        super();
        this.state = {
        about: false,
        projects: false,
        skills: false
        };
        this.handleAboutClick = this.handleAboutClick.bind(this);
        this.handleProjectsClick = this.handleProjectsClick.bind(this);
        this.handleSkillsClick = this.handleSkillsClick.bind(this);
    }

    componentDidMount() {
      this.setState({ about: true });
    }
    handleAboutClick() {
      this.setState({ about: true, projects: false, skills: false })
    }
    handleProjectsClick() {
      this.setState({ about: false, projects: true, skills: false })
    }
    handleSkillsClick() {
      this.setState({ about: false, projects: false, skills: true })
    }
    render() {
      return (
        <div className="main">
          <Navbar
          handleAboutClick={this.handleAboutClick}
          handleProjectsClick={this.handleProjectsClick}
          handleSkillsClick={this.handleSkillsClick} 
          />
          <div className="content">
            {this.state.about ? ( <About /> ) : this.state.projects ? ( <Projects /> ) : this.state.skills ? ( <Skills />) : (<div>You broke my portfolio! Try refreshing or closing your browser and re-visiting.</div>) }
          </div>
          {/* <Footer /> */}
        </div>
      );
    }
}

export default Main;