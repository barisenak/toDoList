
const initialState = {
  toDo: [],
  deleted: [],
  modal: false,
  edited: null
};

// Should be "Pure Function"!
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        toDo: [...state.toDo, action.payload],
      };
    }

    case "DELETE_TASK": {
      const id = action.payload;

      return {
        ...state,
        deleted: [...state.deleted, state.toDo.find((el) => el.id === id)],
        toDo: state.toDo.filter((el) => el.id !== id),
    
      };
    }

    case "RESTORE_TASK": {
      const id = action.payload;

      return {
        ...state,
        toDo: [...state.toDo, state.deleted.find((el) => el.id === id)],
        deleted: state.deleted.filter((el) => el.id !== id),
    
      };
    }

    case "GET_MODAL": {
      console.log(action.payload);
      return {
        ...state,
        modal: true,
        edited: action.payload
      };
    }

    case "EDIT_TASK": {
      state.edited.text = action.payload.text
      return {
        ...state,
        modal: false,
        toDo: state.toDo
      };
    }

    default:
      return state;
    
  }
};
export default reducer;
