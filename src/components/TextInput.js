import "../App.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addAction } from "./actions"


function TextInput() {
  // mapDispatchToProps
  const dispatch = useDispatch();

  const [typedTask, setTypedTask] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(addAction(typedTask));
    setTypedTask("");
  };

  return (
    <div className="form">
      <input
        className="taskName"
        type="text"
        value={typedTask}
        placeholder="enter the name of task"
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
