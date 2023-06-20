//initial state of the user before login
export const initialState = {
  user: null,
};

//to update the user initial_state based on action type
export const actionTypes = {
  SET_USER: "SET_USER",
};

//action returns the type and user value
//action.type is set user
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
