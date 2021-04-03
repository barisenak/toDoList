export const deleteAction = (value) => {
    return {
        type: "DELETE_TASK",
        payload: value
    }
  }

  export const restoreAction = (value) => {
    return {
        type: "RESTORE_TASK",
        payload: value,
    }
  }

  export const getModalAction = (value) => {
    return {
        type: "GET_MODAL",
        payload: value,
    }
  }

  export const editAction = (text, task) => {
    return {
        type: "EDIT_TASK",
        payload: {
            id: text,
            text: task,
    }
  }}

  export const addAction = (value) => {
    return {
        type: "ADD_TASK",
        payload: {
          id: `${Date.now()}`,
          text: value,
        },
      }
  }

  