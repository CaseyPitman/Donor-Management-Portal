//Reducer for handling modal actions

import { SHOW_MODAL, HIDE_MODAL } from "../actions/types";

//Initial state for modals

const initialState = {
  modalType: null,
  modalProps: {
    open: false,
  },
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type,
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};
