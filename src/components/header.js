import React, { Component } from 'react';
import './header.css';


class Header extends Component {
  render() {
    return (
      <div className="header">

      <a href='#'><div class="home-img" /></a>
      <div className='header-link'><a href="#bio">About Me</a></div>
      <div className='header-link'><a href="#projects">Projects</a></div>
      <div className='header-link'><a href="#skills">Skills</a></div>
      <div className='header-link'><a href="#contact">Contact Me</a></div>

      </div>
    );
  }
}

export default Header;