import React, { Component } from 'react';
import './ColorsController.css';

//button component
class ColorsController extends Component {

  constructor(props) {
    super(props);

    this.handleNewColors = this.handleNewColors.bind(this)
  }

  // after click registers, calls on function-property given by parent:
  handleNewColors (e) {
    console.log('new colors BUTTON clicked!!', e.target.textContent);
    this.props.onDelta(e.target.textContent);
  }

  render() {
    return(
      <div className="buttons-box">

      <div className="buttons-wrapper">
        <button
          className="new-colors-btn"
          onClick={this.handleNewColors}
        >
          Sunday Pastels
        </button>
        <button
          className="new-colors-btn"
          onClick={this.handleNewColors}
        >
          Summerset Sunshine
        </button>
        <button
          className="new-colors-btn"
          onClick={this.handleNewColors}
        >
          Midnight Dream
        </button>
        <button
          className="new-colors-btn"
          onClick={this.handleNewColors}
        >
          Heated Passion
        </button>
        <button
          className="new-colors-btn"
          onClick={this.handleNewColors}
        >
          Amazonian Green
        </button>
        <button
          className="new-colors-btn"
          onClick={this.handleNewColors}
        >
          Raging Magma
        </button>
        <button
          className="new-colors-btn"
          onClick={this.handleNewColors}
        >
          Everlasting Skies
        </button>
        <button
          className="new-colors-btn"
          onClick={this.handleNewColors}
        >
          Into the Void
        </button>
      </div>

    </div>

    );
  }
}
export default ColorsController;
