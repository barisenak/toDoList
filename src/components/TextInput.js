import "../App.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

function TextInput() {
  const dispatch = useDispatch();

  let [typedTask, setTypedTask] = useState("");

  let submit = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch({
      type: "ADD_TASK",
      payload: typedTask,
    });
    setTypedTask("");
  };

  return (
    <div className="form">
      <input
        className="taskName"
        type="text"
        value={typedTask}
        placeholder="enter name of task"
        onChange={(event) => {
          setTypedTask(event.target.value);
        }}
      />
      <button className="btn" onClick={submit}>
        Submit
      </button>
    </div>
  );
}

export default TextInput;
