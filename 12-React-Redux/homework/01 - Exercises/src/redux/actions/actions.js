import axios from "axios";
const { ADD_PRODUCT, DELETE_PRODUCT, GET_STORE_NAME } = require("./types");

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const getStoreName = () => {
  return async function (dispatch) {
    let response = await axios.get("http://localhost:3001/store");
    console.log(response);
    return dispatch({
      type: GET_STORE_NAME,
      payload: response.data.name,
    });
  };
};

// module.exports = {
//   addProduct,
//   deleteProduct,
//   getStoreName,
// };
