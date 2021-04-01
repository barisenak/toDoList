import "../App.css";

import { Component } from "react";
import store from "../index.js";

class Card extends Component {
  handleClick = (e) => {
    e.preventDefault();
    e.target.id === "Delete" ? this.deleteTask(e) : this.editTask(e);
  };

  deleteTask = (e) => {
    store.dispatch({
      type: "DELETE_TASK",
      payload: e.target.parentNode.id,
    });
  };

  editTask = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="card" id={this.props.id} key={this.props.key}>
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
