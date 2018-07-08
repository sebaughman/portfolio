import React, { Component } from 'react';
import Header from './components/header';
import Tile from './components/tile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header />
        <section className='hero-header'>
          <div className='hero-header-title'>Sarah Baughman</div> <br />
          <div className='hero-header-subtitle'>Senior ASL Tech Support at GoReact</div>
          <div className='hero-header-description'>
            Strong affinity towards problem solving. <br/>
            Learns complex concepts quickly. <br/>
            Versed in the React Framework. <br/>
          
          </div>
        </section>
        <section className='section' id='bio'>
          <div className='section-title'>About Me</div>
          <div className='tile-container'>
            <Tile title='EdTech' icon='icon cap' description="Recieved a master's degree in Educational Technology from Boise State University. Was hired as a graduate assistant and encouraged to continue for a Phd. "/>
            <Tile title='Programing' icon='icon dev-mountain' description="A strong affinity towards problem solving led to the pursuit of web development. The challenging and rewarding nature of programing resulted in the desire for a career in the field." />
            <Tile title='ASL' icon='icon asl' description='Fluent in American Sign Language and an active member of the Deaf community.' />
          </div>
        </section>
        <section className='section' id='projects'>
          <div className='section-title'>Projects</div>
          <div className='tile-container'>
           <a href='https://gymprojectapp.herokuapp.com/login'rel="noopener noreferrer" target='_blank'> <Tile title='Gym Project' icon='icon gym-project smaller-icon' description='First project using the React framework. Was built for a local climbing gym using a mobile first design. Recieved two awards from DevMountin: Most Shippable Project and Best Overall. React Native version coming soon. ' /> </a>
           <a href='www.devcodebar.com' rel="noopener noreferrer" target='_blank'> <Tile title='Code Bar' icon='icon code-bar smaller-icon' description='Group Project for DevMountain. Built to assist in the assessment distribution at the school it will be used in the following cohort. ' /></a>
            <Tile title='..coming soon' icon='icon coming-soon' description='Currently working on a ReactNative version of my Gym Project app...' />
          </div>
        </section>
        <section className='section'id='skills'>
          <div className='section-title'>Skills</div>
          <div className='tile-container'>
            <Tile title='Languages & Frameworks' icon='smallest-icon' description='Well versed in Javascript. Built projects with React, Node.js, PostgreSQL, MongoDB, Express, Mocha, and more. Have done work in Angular.js and PHP.' />
            <Tile title='Resourcefulness' icon='smallest-icon' description='Retains the the ability to effectively utilize available recourses in order to solve problems correctly and efficiently. A background in higher education lends well the ability to research complex concepts and grok them quickly. ' />
            <Tile title='Other Skills' icon='smallest-icon' description='Strong communication skills and a personable demeanor allow for effective leadership and the ability to thrive in collaborative environments.' />
          </div>
        </section>
        <section className='section 'id='contact'>
          <div className='section-title'>Contact Me</div>
          <div className='contact-container'>
            <a href='https://www.linkedin.com/in/sarah-baughman-8399b085/' rel="noopener noreferrer" target='_blank'><div className='contact-icon linkedIn'  /></a>
            <a href='https://github.com/sebaughman' rel="noopener noreferrer" target='_blank' ><div className='contact-icon github'  /></a>
            <a href='mailto:sarahbaughman@u.boisestate.edu?' ><div className='contact-icon mail'  /></a>
            <a href='https://youtu.be/cyMHZVT91Dw?t=2m31s' rel="noopener noreferrer" target='_blank'><div className='contact-icon tinder'  /></a>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
