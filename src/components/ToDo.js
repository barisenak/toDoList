import "../App.css";

import Card from "./Card.js";

import { useSelector } from "react-redux";

function ToDo() {
  // tasks: Use appropriate variable naming
  // Block Element Modificator
  const tasks = useSelector((state) => {
    console.log(state.toDo)
    return state.toDo;
  });

  return (
    <div className="desk">
      To Do:
      <div>
        {tasks &&
          tasks.map((item) => {
            // Use key as index only if count of elements is not changing
            return (
              <Card
                text={item.text}
                item={item}
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
