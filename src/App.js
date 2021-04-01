import "./App.css";
import TextInput from "./components/TextInput";

import Delete from "./components/Delete";
import ToDo from "./components/ToDo";

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
