import { editAction } from "../../store/actions";
import { connect } from "react-redux";
import Modal from "./Modal.component";

export default connect(
  (state) => ({
    text: state.toDo.find((el) => el.id === state.edited.id),
  }),
  (dispatch) => {
    return {
      editAction: (id, task) => {
        dispatch(editAction(id, task));
      },
    };
  }
)(Modal);
