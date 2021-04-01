import "../App.css";

import { Component } from "react";
import store from "../index.js";

class Card extends Component {
  handleClick = (e) => {
    e.preventDefault();
    e.target.id === "Delete" ? this.deleteTask(e) : this.editTask(e);
  };

  deleteTask = ({ target }) => {
    store.dispatch({
      type: "DELETE_TASK",
      payload: this.props.id,
    });
  };

  editTask = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="card">
        <p className="title">{this.props.text}</p>
        <button id={this.props.btnName} onClick={this.handleClick}>
          {this.props.btnName}
        </button>
        <button id="edit" onClick={this.editTask}>
          Edit
        </button>
      </div>
    );
  }
}

export default Card;
