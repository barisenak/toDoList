import "./App.css";
import TextInput from "./components/TextInput.js";

import Delete from "./components/Delete.js";
import ToDo from "./components/ToDo.js";

function App() {
  return (
    <div>
      <TextInput />
      <div className="box">
        <ToDo />
        <Delete />
      </div>
    </div>
  );
}

export default App;
