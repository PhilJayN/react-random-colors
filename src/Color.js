import React, { Component } from 'react';

//child Component
class Color extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    console.log ('clicked!')
    this.props.onDelta(this.props.id)
  }

  render() {
    // const style = {
    //   // backgroundColor: 'goldenrod',
    //   backgroundColor: 'pink',
    // }
    return(
      <div className="color-wrapper">
        <div
          className="color"
          style={{backgroundColor: this.props.code}}
          onClick={this.handleChange}
        >
        </div>
        <div className="color-code">
          {this.props.code}
        </div>
      </div>
    );
  }

}

export default Color;
