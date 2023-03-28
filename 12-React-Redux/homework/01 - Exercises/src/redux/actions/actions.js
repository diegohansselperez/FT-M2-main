import axios from "axios";
const { ADD_PRODUCT, DELETE_PRODUCT } = require("./types");

export const addProduct = (value) => {
  return {
    type: ADD_PRODUCT,
    payload: value,
  };
};

export const deleteProduct = (value) => {
  return {
    type: DELETE_PRODUCT,
    payload: value,
  };
};

export const getStoreName = () => {
  return async function (dispatch) {
    let response = await axios.get("http://localhost:3001/store");
    /*Aquí es donde agregas tu código*/
    return dispatch({
      type: "GET_STORE_NAME",
      payload: response.data.name,
    });
  };
};

// module.exports = {
//   addProduct,
//   deleteProduct,
//   getStoreName,
// };
