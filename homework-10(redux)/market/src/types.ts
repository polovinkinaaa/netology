import { CANCEL_EDIT, CHANGE_FIELD, SAVE_ITEM } from "./redux/actions.ts";

export type FormType = {
  title: string;
  image: string;
  brand: string;
  original: boolean;
  price: string;
  count: string;
};

export type ProductType = FormType & {
  id: string;
};

export type ProductState = {
  products: ProductType[];
  form: FormType;
};

export type ProductAction =
  | {
      type: typeof CHANGE_FIELD;
      payload: {
        title: string;
        image: string;
        brand: string;
        original: boolean;
        price: string;
        count: string;
      };
    }
  | { type: typeof SAVE_ITEM }
  | { type: typeof CANCEL_EDIT };
