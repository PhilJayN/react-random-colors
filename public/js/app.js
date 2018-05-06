

// Parent Component
class ColorsDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };

  }

  componentDidMount() {
    this.setState({ colors: Seed.colors })
  }

  render() {

    const colors = this.state.colors.map((color) =>(
      <Color
        key={'color-' + color.id}
        code={color.code}
      />
    ));

    return(
      <div className="content-wrapper">
        {colors}
      </div>
    );
  }

}
//child Component
class Color extends React.Component {

  render() {
    const style = {
      // backgroundColor: 'goldenrod',
      backgroundColor: 'pink',
    }
    return(
      <div className="colors-wrapper">
        <div
          className="color"
          style={{backgroundColor: this.props.code}}
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
