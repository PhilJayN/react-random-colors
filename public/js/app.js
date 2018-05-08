

// Parent Component
class ColorsDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };

    this.handleColorChange = this.handleColorChange.bind(this);
  }

  componentDidMount() {
    this.setState({ colors: Seed.colors })
  }


  handleColorChange(colorId) {
    console.log ('you clicked on one color!', 'color id:', colorId);
    const nextColors = this.state.colors.map((color) => {
      if (color.id === colorId) {
        console.log ('match color id!!');
        return Object.assign({}, color, {
          code: 'rgb(0, 0, 0)',
        });
      } else {
        return color;
      }
    });
    this.setState({
      colors: nextColors,
    })
    //code for creating new objects, then using .setState
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
      <div className="colors-wrapper">
        {this.props.id}
        <div
          className="color"
          style={{backgroundColor: this.props.code}}
          onClick={this.handleChange}
        >
          {this.props.code}
        </div>
      </div>
    );
  }

}










//button component
class ColorsController extends React.Component {
  handleNewColors () {
    console.log('new colors btn clicked!!');
    helpers.newColor();
  }
  render() {
    return(
      <div className="button-wrapper">
        <button
          className="new-colors"
          onClick={this.handleNewColors}
        >
          New Colors
        </button>
      </div>
    );
  }
}


ReactDOM.render(
  <ColorsDashboard />,
  document.getElementById('content')
)
