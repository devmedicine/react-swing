import React, { Component } from "react";
import "./App.css";
import Todos from "./Todos";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      id: 0,
      title: "",
      description: ""
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.add = this.add.bind(this);
  }

  add() {
    let d = this.state.data;
    let id = this.state.id;
    d.push({
      id: id++,
      title: this.state.title,
      description: this.state.description
    });
    this.setState({ data: d, id: id, title: "", description: "" });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <Todos data={this.state.data} />
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
        ></input>
        <label>Description</label>
        <input
          type="text"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        ></input>
        <button onClick={this.add}>addTodo</button>
      </div>
    );
  }
}

export default App;
