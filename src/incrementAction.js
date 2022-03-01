const incrementActions = () => {
  console.log("here");
  return {
    type: "increment"
  };
};
// const incrementActions = () => async (dispatch) => {
//   console.log("here");
//   dispatch({
//     type: "increment"
//   });
// };
export default incrementActions;
