import React, { Component } from "react";

class StateTest extends Component {
  constructor() {
    super();
    this.state = {
      text: "First",
      secondText: "Second"
    };
  }

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSecondTextChange = event => {
    this.setState({ secondText: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <input type="text" onChange={this.handleTextChange}></input>
        <h1>{this.state.secondText}</h1>
        <input type="text" onChange={this.handleSecondTextChange}></input>
      </div>
    );
  }
}

export default StateTest;
