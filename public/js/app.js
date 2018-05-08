
helpers.newColor()
// Parent Component
class ColorsDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };

    this.handleColorChange = this.handleColorChange.bind(this);
    this.rainbowUnicorn = this.rainbowUnicorn.bind(this);
  }

  componentDidMount() {
    this.setState({ colors: Seed.colors })
  }

  handleColorChange(colorId) {
    // console.log ('you clicked on one color!', 'color id:', colorId);
    const nextColors = this.state.colors.map((color) => {
      if (color.id === colorId) {
        console.log ('match color id!!');
        return Object.assign({}, color, {
          code: helpers.newColor(),
        });
      } else {
        console.log ('asdjfkl;')
        return color;
      }
    });
    this.setState({
      colors: nextColors,
    });
    console.log ('created colors:', this.state.colors);
  }

  rainbowUnicorn(hue) {
    console.log ('rainbowUnicorn running, hue is', hue);
    // checks for hue color, then puts that hue as an argument into a generic helper generator fxn
    const colors = this.state.colors.map((color) => {
      return Object.assign({}, color, {
        code: helpers.generateColors(hue),
      });
    });
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
        <Instructions />
      </div>
    );
  }

}
//child Component
class Color extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    console.log ('clicked!')
    this.props.onDelta(this.props.id)
  }

  render() {
    const style = {
      // backgroundColor: 'goldenrod',
      backgroundColor: 'pink',
    }
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

//instructions
class Instructions extends React.Component {
  render() {
    return(
      <div className="instructions">
        <p>Click on any color to generate one new color.</p>
        <p>Click on New Colors button for many colors.</p>
      </div>
    );
  }
}


//button component
class ColorsController extends React.Component {

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
      <div className="button-wrapper">
        <button
          className="new-colors-btn"
          onClick={this.handleNewColors}
        >
          New Pastels
        </button>
        <button
          className="new-colors-btn"
          onClick={this.handleNewColors}
        >
          Summerset Sunshine
        </button>
      </div>
    );
  }
}


ReactDOM.render(
  <ColorsDashboard />,
  document.getElementById('content')
)
