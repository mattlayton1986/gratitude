import { ActionTypes } from "../types";

const INITIAL_STATE = {
  modalOpen: false,
  tabValue: 0
}

const applicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen
      }
    case ActionTypes.SET_TAB_VALUE: 
      return {
        ...state,
        tabValue: action.payload
      }
    default: 
      return state
  }
}

export default applicationReducer