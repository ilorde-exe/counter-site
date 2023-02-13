import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <h1 class="display-4 m-3">Counter Website</h1>
          </a>
        </nav>
        <div class="container">
          <br />
          <br />
          <h1 class="display-6">
            Enter the number of things you want to count:
          </h1>
          <br />
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your value"
              aria-label="Enter your value"
              aria-describedby="button-addon2"
              onChange={this.getData}
            ></input>
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={this.renderComponents}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    );
  }
  getData(val) {
    console.log(val.t)
  }
  renderComponents(){
    
  }
}

export default Navbar;
