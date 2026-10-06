import type { FilterAction, FilterState } from "../types.ts";
import { CHANGE_FILTER } from "./actions.ts";

const initialState = {
  filter: "",
};

const filterReducer = (
  state: FilterState = initialState,
  action: FilterAction,
) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};

export default filterReducer;
