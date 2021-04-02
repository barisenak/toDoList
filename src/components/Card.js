import "../App.css";

import { Component } from "react";
import store from "../index.js";

class Card extends Component {

  deleteTask = () => {
    store.dispatch({
      type: "DELETE_TASK",
      payload: this.props.id,
    });
  };

  restoreTask = () => {
    console.log(this.props.id);
    store.dispatch({
      type: "RESTORE_TASK",
      payload: this.props.id,
    });
  };

  editTask = (e) => {
    e.preventDefault();
    store.dispatch({
      type: "GET_MODAL",
      payload: this.props.item,
    });
  };

  render() {
    return (
      <div className="card">
        <p className="card__title">{this.props.text}</p>
        <button id={this.props.btnName} onClick={this.props.btnName !== "Restore" ? this.deleteTask : this.restoreTask}>
          {this.props.btnName}
        </button>
        {this.props.btnName !== "Restore" && <button onClick={this.editTask}>Edit
        </button>}
          
      </div>
    );
  }
}

export default Card;
