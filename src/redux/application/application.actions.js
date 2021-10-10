import { ActionTypes } from "../types";

export const toggleModal = () => ({
  type: ActionTypes.TOGGLE_MODAL
})

export const setTabValue = (value) => ({
  type: ActionTypes.SET_TAB_VALUE,
  payload: value
})