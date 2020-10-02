// let visibility = false;

// const onToggle = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggle}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>

//       {visibility && <p>Here are the details</p>}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      visibility: false,
    };
  }

  onToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.onToggle}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && <p>Here are the details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
