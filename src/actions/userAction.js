import axios from "axios";

function setUser(user) {
  return {
    type: "FETCH_USER",
    user,
  };
}

// export const fethUser = () => {
//   return function (dispatch) {
//     axios.get("/api/current_user")
//     .then((res) => dispatch(setUser(res)));
//   };
// };


export const fethUser = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/current_user");
  dispatch(setUser(res.data));
};
