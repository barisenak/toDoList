import "../../App.css";

import Card from "../Card.js";

function Delete({ tasks, test }) {
  // smart and dump components
  // redux-logger

  return (
    <div className="list">
      Deleted:
      <div className="deskDeleted">
        {tasks &&
          tasks.map((item, index) => {
            return (
              <Card
                text={item.text}
                id={item.id}
                key={item.id}
                btnName="Restore"
              />
            );
          })}
      </div>
    </div>
  );
}

export default Delete;
