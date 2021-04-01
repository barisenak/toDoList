import "../App.css";

import Card from "./Card.js";

import { useSelector } from "react-redux";

function Delete() {
  const delTasksFromRedux = useSelector((state) => {
    return state.deleted;
  });

  return (
    <div className="list">
      Deleted:
      <div className="deskDeleted">
        {delTasksFromRedux &&
          delTasksFromRedux.map((item, index) => {
            return (
              <Card text={item} id={index} key={index + 11} btnName="Restore" />
            );
          })}
      </div>
    </div>
  );
}

export default Delete;
