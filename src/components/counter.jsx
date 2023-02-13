import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    let bootstrapClasses = this.bootstrapRender();
    return (
      <div>
        <h2>
          <span className={bootstrapClasses}>{this.displayCount()}</span>
          <button
            onClick={this.increment}
            className="btn btn-success btn-lg m-1"
          >
            Increment
          </button>
          <button onClick={this.decrement} className="btn btn-danger btn-lg">
            Decrement
          </button>
          <br />
        </h2>
      </div>
    );
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.displayCount();
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  bootstrapRender() {
    let bootstrapClasses = "badge m-2 bg-";
    if (this.state.count === 0) bootstrapClasses += "warning";
    else bootstrapClasses += "primary";
    return bootstrapClasses;
  }

  displayCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
