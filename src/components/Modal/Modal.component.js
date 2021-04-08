import "../../App.css";

import { useState } from "react";

function Modal({ editAction, text }) {
  const [task, editTask] = useState(text.text);

  const edit = () => {
    editAction(text.id, task);
    editTask("");
  };

  return (
    <div className="modal">
      <div className="modal__window">
        <input
          type="text"
          id="modal__input"
          value={task}
          onChange={(event) => {
            editTask(event.target.value);
          }}
        ></input>
        <button
          onClick={(event) => {
            edit(event.target.value);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Modal;
