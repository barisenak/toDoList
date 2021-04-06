import "../../App.css";
import { useState } from "react";


function TextInput({addAction}) {
    
  const [typedTask, setTypedTask] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addAction(typedTask)
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
