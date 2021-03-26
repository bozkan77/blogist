import * as types from "../actions/types";

const initialState = {
   posts: []
};

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_POST:
      return {
        ...state,
        post: action.payload,
      }
    default:
      return {
        ...state
      }
  }
} 

export default postReducer;