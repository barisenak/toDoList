import { connect } from "react-redux";

import App from "./App.component";

export default connect((state) => ({
  modal: state.modal,
}))(App);
