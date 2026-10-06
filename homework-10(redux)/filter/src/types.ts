import {
  CANCEL_EDIT,
  type CHANGE_FIELD,
  EDIT_ITEM,
  REMOVE_ITEM,
  SAVE_ITEM,
} from "./redux/actions.ts";

export type ItemType = {
  id: string;
  text: string;
  value: string;
};

export type ListState = {
  items: ItemType[];
  form: {
    text: string;
    value: string;
  };
  editingId: string | null;
};

export type ListAction =
  | { type: typeof CHANGE_FIELD; payload: { text: string; value: string } }
  | { type: typeof SAVE_ITEM }
  | { type: typeof EDIT_ITEM; payload: { id: string } }
  | { type: typeof CANCEL_EDIT }
  | { type: typeof REMOVE_ITEM; payload: { id: string } };
