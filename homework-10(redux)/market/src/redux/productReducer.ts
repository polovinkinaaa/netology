import { CANCEL_EDIT, CHANGE_FIELD, SAVE_ITEM } from "./actions";
import type { FormType, ProductAction, ProductState } from "../types.ts";

const initialForm: FormType = {
  title: "",
  image: "/placeholder.png",
  brand: "",
  original: false,
  price: "",
  count: "",
};

const initialState = {
  products: [],
  form: initialForm,
};

const productReducer = (
  state: ProductState = initialState,
  action: ProductAction,
) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        form: action.payload,
      };
    case SAVE_ITEM:
      return {
        products: [
          ...state.products,
          {
            ...state.form,
            id: crypto.randomUUID(),
          },
        ],
        form: initialForm,
      };
    case CANCEL_EDIT:
      return {
        ...state,
        form: initialForm,
      };
    default:
      return state;
  }
};

export default productReducer;
