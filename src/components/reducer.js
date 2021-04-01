const initialState = {
  toDo: [],
  deleted: [],
};

// TO-DO Item
// { id: String, text: String }

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
        toDo: state.toDo.filter((el) => el.id !== id),
        deleted: [...state.deleted, state.toDo.find((el) => el.id === id)],
      };
    }

    default:
      return state;
  }
};
export default reducer;
