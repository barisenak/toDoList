const initialState = {
  toDo: [],
  deleted: [],
};

let arrToDo = [];
let arrDel = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      console.log(action.payload);
      arrToDo.push(action.payload);
      return {
        ...state,
        toDo: arrToDo,
      };
    }

    case "DELETE_TASK": {
      arrDel.push(arrToDo[action.payload]);
      let CopyarrToDo = [...arrToDo];
      CopyarrToDo.splice(action.payload, 1);
      console.log(arrToDo);
      return {
        ...state,
        toDo: CopyarrToDo,
        deleted: arrDel,
      };
    }

    default:
      return state;
  }
};
export default reducer;
