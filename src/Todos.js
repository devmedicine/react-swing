import React, { Component } from "react";
import Todo from "./Todo";

class Todos extends Component {
  render() {
    // 受け取ったTodoのリストをTodoクラスを使って形にする
    const todoList = this.props.data.map(todo => (
      <Todo key={todo.id} {...todo} />
    ));
    return <ul>{todoList}</ul>;
  }
}

export default Todos;
