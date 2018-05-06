

// Parent Component
class ColorsDashboard extends React.Component {
  render() {
    return(
      <div className="content-wrapper">
        <ColorsController />
        <SelectableColors />
      </div>
    );
  }

}
//child Component
class SelectableColors extends React.Component {
  render() {
    return(
      <div className="colors-wrapper">
        sdajlfk;
      </div>
    );
  }

}

class ColorsController extends React.Component {
  handleNewColors () {
    console.log('new colors btn clicked!!');
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
