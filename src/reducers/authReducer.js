
const INITIAL_STATE = {
  user: null,
};

export function authReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        user: action.user || false,
      };

    default:
      return { ...state };
  }
}
