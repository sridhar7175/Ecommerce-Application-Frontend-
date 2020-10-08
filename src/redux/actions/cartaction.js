export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item.payload,
  };
}

export function removeToCart() {
  return {
    type: REMOVE_TO_CART,
  };
}
