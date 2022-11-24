import { ADD_ALERT } from "../constants/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ALERT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
