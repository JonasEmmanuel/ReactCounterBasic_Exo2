import React from "react";
import ReactDOM from "react-dom";

const Counter = props => (
  <div>
    {props.value > 0 && (
      <button onClick={() => props.decrementAction()}>-</button>
    )}
    <span>{props.value}</span>
    {props.value < 10 && (
      <button onClick={() => props.incrementAction()}>+</button>
    )}
  </div>
);

class Counters extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: [0, 0, 0, 0]
    };
  }

  incrementActionCreator(index) {
    this.setState(prevState => {
      const copieCpt = [...prevState.counters];
      copieCpt[index] += 1;
      return { counters: copieCpt };
    });
  }

  decrementActionCreator(index) {
    this.setState(prevState => {
      const copieCpt = [...prevState.counters];
      copieCpt[index] -= 1;
      return { counters: copieCpt };
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState(prevState => ({
              counters: [...prevState.counters, 0]
            }))
          }
        >
          Ajouter Counter
        </button>
        <div>
          {this.state.counters.map((currentValue, index) => (
            <Counter
              value={currentValue}
              decrementAction={() => this.decrementActionCreator(index)}
              incrementAction={() => this.incrementActionCreator(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counters />, document.getElementById("app"));
