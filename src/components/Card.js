import "../App.css";

import { Component } from "react";
import store from "../index.js";
import {deleteAction, restoreAction, getModalAction} from "../store/actions"

class Card extends Component {

  deleteTask = () => {
    store.dispatch(deleteAction(this.props.id));
  };

  restoreTask = () => {
    store.dispatch(restoreAction(this.props.id));
  };

  editTask = (e) => {
    e.preventDefault();
    store.dispatch(getModalAction(this.props.item)
    );
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
