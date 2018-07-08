import React, { Component } from 'react';
import './tile.css'


class Tile extends Component {
  render() {
    return (
      <div className="tile" href={this.props.link}>
        <div className={`${this.props.icon}`} />
        <div className='tile-title' >{this.props.title}</div>
        <div className='tile-description'>{this.props.description}</div>
      </div>
    );
  }
}

export default Tile;