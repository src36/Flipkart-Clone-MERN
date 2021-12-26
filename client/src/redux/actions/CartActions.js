import axiox from "axios";
import * as actionTypes from "../constants/CartConstant";

const url = "http://localhost:8000";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axiox.get(`${url}/product/${id}`);
    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
  } catch (error) {
    console.log("Error while calling add to cart api");
  }
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
