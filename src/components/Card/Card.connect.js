import {
  deleteAction,
  restoreAction,
  getModalAction,
} from "../../store/actions";
import { connect } from "react-redux";
import Card from "./Card.component";

export default connect(null, (dispatch) => {
  return {
    deleteAction: (id) => {
      dispatch(deleteAction(id));
    },
    restoreAction: (id) => {
      dispatch(restoreAction(id));
    },
    getModalAction: (item) => {
      dispatch(getModalAction(item));
    },
  };
})(Card);
