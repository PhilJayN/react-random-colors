
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
  render() {
    return(
      <div className="button-wrapper">
        <button className="new-colors">
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
