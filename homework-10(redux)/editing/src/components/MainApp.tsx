import { useDispatch, useSelector } from "react-redux";
import {
  CANCEL_EDIT,
  CHANGE_FIELD,
  EDIT_ITEM,
  REMOVE_ITEM,
  SAVE_ITEM,
} from "../redux/actions.ts";
import type { ItemType } from "../types.ts";
import type { RootState } from "../redux/store.ts";
import type { SubmitEvent } from "react";
import "./MainApp.css";

export const MainApp = () => {
  const dispatch = useDispatch();
  const { items, form, editingId } = useSelector(
    (state: RootState) => state.list,
  );

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: SAVE_ITEM,
    });
  };

  return (
    <div className="app">
      <form className="add-date" onSubmit={handleSubmit}>
        <input
          name="user_text"
          id="user_text"
          type="text"
          required
          value={form.text}
          onChange={(e) => {
            dispatch({
              type: CHANGE_FIELD,
              payload: { text: e.target.value, value: form.value },
            });
          }}
        />
        <input
          name="user_number"
          id="user_number"
          type="number"
          required
          value={form.value}
          onChange={(e) => {
            dispatch({
              type: CHANGE_FIELD,
              payload: { text: form.text, value: e.target.value },
            });
          }}
        />
        <button type="submit">Save</button>
        {editingId && (
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: CANCEL_EDIT,
              })
            }
          >
            Cancel
          </button>
        )}
      </form>
      {items.length > 0 &&
        items.map((item: ItemType) => (
          <div className="item" key={item.id}>
            - {item.text} {item.value}
            <div className="buttons">
              <button
                type="button"
                className="workout-fix"
                onClick={() => {
                  dispatch({
                    type: EDIT_ITEM,
                    payload: { id: item.id },
                  });
                }}
              >
                ✎
              </button>
              <button
                type="button"
                className="workout-delete"
                onClick={() => {
                  dispatch({
                    type: REMOVE_ITEM,
                    payload: { id: item.id },
                  });
                }}
              >
                ✘
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
