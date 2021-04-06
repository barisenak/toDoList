import "../App.css";


import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {editAction} from "../store/actions"


function Modal() {

    const dispatch = useDispatch();
    const text = useSelector((state) => {
        return state.toDo.find((el) => el.id === state.edited.id);
      });
      const [task, editTask] = useState(text.text);


  
    const edit = () =>{
        dispatch(editAction(text.id, task));
        editTask("");
    }

  return (
    <div className="modal">
    <div className="modal__window">
        <input type="text" id="modal__input" value={task} onChange={(event) => {
          editTask(event.target.value)}}></input>
        <button onClick={(event) => {
          edit(event.target.value)}}>Edit</button>  
    </div>
</div>
  );
}

export default Modal;