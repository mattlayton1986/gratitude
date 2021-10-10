import { ActionTypes } from "../types"
import { addItemToList } from './gratitude.utils'

const INITIAL_STATE = {
  lists: []
}

const gratitudeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_GRATITUDE_ITEM: 
      return {
        ...state,
        lists: addItemToList(state.lists, action.payload)
      }
    default: 
      return state
  }
}

export default gratitudeReducer