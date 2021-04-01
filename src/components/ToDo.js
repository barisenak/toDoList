import "../App.css";

import Card from "./Card.js";

import { useSelector } from "react-redux";

function ToDo() {
  const tasksFromRedux = useSelector((state) => {
    return state.toDo;
  });

  return (
    <div className="list">
      To Do:
      <div className="deskToDo">
        {tasksFromRedux &&
          tasksFromRedux.map((item, index) => {
            return (
              <Card text={item} id={index} key={index + 11} btnName="Delete" />
            );
          })}
      </div>
    </div>
  );
}

export default ToDo;
