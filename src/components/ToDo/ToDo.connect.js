import { connect } from "react-redux";

import ToDo from "./ToDo.component";

export default connect((st) => ({
  tasks: st.toDo,
}))(ToDo);