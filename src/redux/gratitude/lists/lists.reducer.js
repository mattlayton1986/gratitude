import { combineReducers } from "redux";
import { addListItem } from './lists.utils'
import { ActionTypes } from "../../types";

// byId
const listsById = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_GRATITUDE_ITEM:
     return addListItem(state, action.payload)
    default: 
      return state
  }
}

// allIds
const allLists = (state = [], action) => {
  switch(action.type) {
    case ActionTypes.ADD_GRATITUDE_ITEM:
      return state
    default: 
      return state
  }
}

const listsReducer = combineReducers({
  byId: listsById,
  allIds: allLists
})

export default listsReducer