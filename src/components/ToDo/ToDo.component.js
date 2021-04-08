import "../../App.css";

import Card from "../Card";

function ToDo({ tasks }) {
  // tasks: Use appropriate variable naming
  // Block Element Modificator

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
