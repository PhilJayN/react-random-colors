import React, { Component } from 'react';
import './index.css';
import Color from './Color';
import ColorsController from './ColorsController';
// import helpers from './helpers';
// import Seed from './Seed';


// Parent Component
class ColorsDashboard extends Component {
  sayHello() {
    console.log('hello!!');
    const colors = [
      {
        id: 1,
        code: 'rgb(233, 152, 148)',
      },
      {
        id: 2,
        code: 'rgb(100, 159, 246)',
      },
      {
        id: 3,
        code: 'rgb(200, 249, 246)',
      },
      {
        id: 4,
        code: 'rgb(234, 190, 146)',
      },
      {
        id: 5,
        code: 'rgb(214, 220, 166)',
      },
      {
        id: 6,
        code: 'rgb(160, 169, 215)',
      },
      {
        id: 7,
        code: 'rgb(147, 202, 166)',
      },
      {
        id: 8,
        code: 'rgb(195, 180, 224)',
      },
    ];

    return colors;
  }

  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };

    this.handleColorChange = this.handleColorChange.bind(this);
    this.rainbowUnicorn = this.rainbowUnicorn.bind(this);
  }

  componentDidMount() {
    this.setState({ colors: this.sayHello() })
  }


  // handles changing of one circle color on click (only working for pastels at the moment)
  handleColorChange(colorId) {
    console.log ('you clicked on one color!', 'color id:', colorId);
    console.log (testHelper());

    // const nextColors = this.state.colors.map((color) => {
    //   if (color.id === colorId) {
    //     console.log ('match color id!!');
    //     return Object.assign({}, color, {
    //       code: pastels(),
    //     });
    //   } else {
    //     console.log ('asdjfkl;')
    //     return color;
    //   }
    // });
    // this.setState({
    //   colors: nextColors,
    // });
    // console.log ('created colors:', this.state.colors);
  }

  rainbowUnicorn(hue) {
    console.log ('rainbowUnicorn running, hue is', hue);
    var colors;
    if (hue === 'Sunday Pastels') {
      colors = this.state.colors.map((color) => {
        return Object.assign({}, color, {
          code: pastels(hue),
        });
      });
    } else {
      // checks for hue color, then puts that hue as an argument into a generic helper generator fxn
      colors = this.state.colors.map((color) => {
        return Object.assign({}, color, {
          code: generateColors(hue),
        });
      });
    }
    this.setState({
      colors: colors,
    });
  }

  render() {
    const colorComponents = this.state.colors.map((color) =>(
      <Color
        key={'color-' + color.id}
        id={color.id}
        code={color.code}
        onDelta={this.handleColorChange}
      />
    ));

    return(
      <div className="content-wrapper">
        {colorComponents}
        <ColorsController
          onDelta={this.rainbowUnicorn}
        />
      </div>
    );
  }

}

function testHelper() {
  console.log('helper!!!!!!!');
}


function pastels(){
    var r = (Math.round(Math.random()* 127) + 127);
    var g = (Math.round(Math.random()* 127) + 127);
    var b = (Math.round(Math.random()* 127) + 127);
    var color = 'rgb('
                      + r.toString()
                      + ', '
                      + g.toString()
                      + ', '
                      + b.toString()
                      + ')';

    console.log ('r', r, 'g', g, 'b', b, 'color var:', color);
    return color;
}

function loadColorBounds(hue) {
  // new colors arise depending on the mixture of red(r), green(g), blue(b)...
  // this fxn sets the boundary for the max and min of 'r', 'g', and 'b'
  // Fierce, fiesty, Arabian nights, raging inferno, everlasting sunshine, midnight essence,
  // fervent, zealot, night to reemmber, magma's soul,
  var bounds;
  if (hue === 'Midnight Dream') {
    // bounds = [[rMax,rMin], [gMax,gMin], [bMax,bMin]];
    bounds = [[48,21], [40,4], [86,71]];
  }
  else if (hue === 'Summerset Sunshine') {
    bounds = [[248,242], [218,209], [60,2]];
  }
  else if (hue === 'Heated Passion') {
    bounds = [[255,216], [33,1], [33,1]];
  }
  else if (hue === 'Amazonian Green') {
    bounds = [[62,30], [119,109], [61,37]];
  }
  else if (hue === 'Raging Magma') {
    bounds = [[247,242], [90,76], [34,14]];
  }
  else if (hue === 'Everlasting Skies') {
    bounds = [[94,58], [159,130], [255,246]];
  }
  else if (hue === 'Into the Void') {
    bounds = [[9,2], [14,9], [25,15]];
  }

  // else if (hue === 'Neutral Grounds') {
  //   // bounds = [[178,84], [186,102], [102,96]];
  //   bounds = [[188,175], [186,179], [185,193]];
  // }


  return {
    rMax: bounds[0][0],
    rMin: bounds[0][1],
    gMax: bounds[1][0],
    gMin: bounds[1][1],
    bMax: bounds[2][0],
    bMin: bounds[2][1],
  }
}

function generateColors(hue) {
//fxn decideBounds returns an object, so we use dot notation below: b.rMax
//rename function b to something else so it doesn't mix with with 'b' in rgb??
  var c = loadColorBounds(hue);
                                      // ( max - min) + min
    var r = Math.round( Math.random() * (c.rMax - c.rMin) + c.rMin );
    var g = Math.round( Math.random() * (c.gMax - c.gMin) + c.gMin );
    var b = Math.round( Math.random() * (c.bMax - c.bMin) + c.bMin );

    var color = 'rgb('
    + r.toString()
    + ', '
    + g.toString()
    + ', '
    + b.toString()
    + ')';

    console.log ('r', r, 'g', g, 'b', b, 'color var:', color);
    return color;
}


export default ColorsDashboard;
