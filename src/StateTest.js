import React, { Component } from "react";

class StateTest extends Component {
  constructor() {
    super();
    this.state = {
      text: "First"
    };
  }

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <input type="text" onChange={this.handleTextChange}></input>
      </div>
    );
  }
}

export default StateTest;
