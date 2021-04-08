import "../App.css";
import TextInput from "../components/TextInput";
import Delete from "../components/Delete";
import ToDo from "../components/ToDo";
import Modal from "../components/Modal";

function App({ modal }) {
  return (
    <div>
      <TextInput />
      <div className="box">
        <ToDo />
        <Delete />
      </div>
      {modal && <Modal />}
    </div>
  );
}

export default App;
