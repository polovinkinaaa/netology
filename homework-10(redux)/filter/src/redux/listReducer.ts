import {
  CANCEL_EDIT,
  CHANGE_FIELD,
  EDIT_ITEM,
  REMOVE_ITEM,
  SAVE_ITEM,
} from "./actions";
import type { ListAction, ListState } from "../types.ts";

const initialState = {
  items: [],
  form: {
    text: "",
    value: "",
  },
  editingId: null,
};

const listReducer = (state: ListState = initialState, action: ListAction) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        form: {
          text: action.payload.text,
          value: action.payload.value,
        },
      };
    case SAVE_ITEM:
      if (state.editingId == null) {
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: crypto.randomUUID(),
              text: state.form.text,
              value: state.form.value,
            },
          ],
          form: {
            text: "",
            value: "",
          },
        };
      } else {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === state.editingId
              ? { id: item.id, text: state.form.text, value: state.form.value }
              : item,
          ),
          form: { text: "", value: "" },
          editingId: null,
        };
      }
    case EDIT_ITEM: {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (!item) {
        return state;
      }
      return {
        ...state,
        form: {
          text: item.text,
          value: item.value,
        },
        editingId: item.id,
      };
    }
    case CANCEL_EDIT:
      return {
        ...state,
        form: {
          text: "",
          value: "",
        },
        editingId: null,
      };
    case REMOVE_ITEM: {
      const isEdit = state.editingId === action.payload.id;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        form: isEdit ? { text: "", value: "" } : state.form,
        editingId: isEdit ? null : state.editingId,
      };
    }
    default:
      return state;
  }
};

export default listReducer;
