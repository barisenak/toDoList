import "../../App.css";

import { Component } from "react";

class Card extends Component {
  deleteTask = () => {
    this.props.deleteAction(this.props.id);
  };

  restoreTask = () => {
    this.props.restoreAction(this.props.id);
  };

  editTask = (e) => {
    e.preventDefault();
    this.props.getModalAction(this.props.item);
  };

  render() {
    return (
      <div className="card">
        <p className="card__title">{this.props.text}</p>
        <button
          id={this.props.btnName}
          onClick={
            this.props.btnName !== "Restore"
              ? this.deleteTask
              : this.restoreTask
          }
        >
          {this.props.btnName}
        </button>
        {this.props.btnName !== "Restore" && (
          <button onClick={this.editTask}>Edit</button>
        )}
      </div>
    );
  }
}

export default Card;
