import state from "sweetalert/typings/modules/state";
import { ADD_TO_CART } from "../actions/cartaction";

export const cart = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {};
  }
};
