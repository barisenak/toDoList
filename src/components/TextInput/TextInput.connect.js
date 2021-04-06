import { addAction } from "../../store/actions"
import { connect } from "react-redux";
import TextInput from "./TextInput.component"

export default connect(null, (dispatch) =>{ 
    return{
        addAction: (taskContent)=> { dispatch(addAction(taskContent))}
}})(TextInput)