import { ActionTypes } from "../../types";

export const toggleItemComplete = (itemId) => ({
  type: ActionTypes.TOGGLE_ITEM_COMPLETE,
  payload: itemId
})