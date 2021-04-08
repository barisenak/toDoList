import "../../App.css";

import Card from "../Card/";

function Delete({ tasks }) {
  // smart and dump components
  // redux-logger

  return (
    <div className="desk">
      Deleted:
      <div>
        {tasks &&
          tasks.map((item) => {
            return (
              <Card
                text={item.text}
                item={item}
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
