import { connect } from "react-redux";

import Delete from "./Delete.component";

export default connect((st) => ({
  tasks: st.deleted,
  test: 123,
}))(Delete);
