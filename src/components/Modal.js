import "../App.css";


import { useState } from "react";


import { useDispatch, useSelector } from "react-redux";

function Modal() {

    const [task, editTask] = useState("");
    const dispatch = useDispatch();
    const text = useSelector((state) => {
        return state.toDo.find((el) => el.id === state.edited.id).text;
      });

  
    const edit = () =>{
        // refactor to use Redux actions
        dispatch({
        type: "EDIT_TASK",
        payload: {
            id: `${Date.now()}`,
            text: task,
        },
        });
        editTask("");
    }

  return (
    <div className="modal">
    <div className="modal__window">
        <input type="text" id="modal__input" value={text} onChange={(event) => {
          editTask(event.target.value)}}></input>
        <button onClick={(event) => {
          edit(event.target.value)}}>Edit</button>  
    </div>
</div>
  );
}

export default Modal;