import "../App.css";

import Card from "./Card.js";

import { useSelector } from "react-redux";

function ToDo() {
  // tasks: Use appropriate variable naming
  // Block Element Modificator
  const tasksFromRedux = useSelector((state) => {
    return state.toDo;
  });

  return (
    <div className="list">
      To Do:
      <div className="deskToDo">
        {tasksFromRedux &&
          tasksFromRedux.map((item, index) => {
            // Use key as index only if count of elements is not changing
            return (
              <Card
                text={item.text}
                id={item.id}
                key={item.id}
                btnName="Delete"
              />
            );
          })}
      </div>
    </div>
  );
}

export default ToDo;
