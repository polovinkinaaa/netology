import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store.ts";
import { CANCEL_EDIT, CHANGE_FIELD, SAVE_ITEM } from "../redux/actions.ts";
import type { SubmitEvent } from "react";
import "./ProductForm.css";

const ProductForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector((state: RootState) => state.list);
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: SAVE_ITEM,
    });
  };
  return (
    <div className="product-form">
      <form className="add-product" onSubmit={handleSubmit}>
        <h2 className="form-title">Новый товар</h2>
        <label htmlFor="title">Название</label>
        <input
          name="title"
          id="title"
          type="text"
          required
          value={form.title}
          onChange={(e) => {
            dispatch({
              type: CHANGE_FIELD,
              payload: { ...form, title: e.target.value },
            });
          }}
        />
        <label htmlFor="image">Картинка</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
              dispatch({
                type: CHANGE_FIELD,
                payload: { ...form, image: String(reader.result) },
              });
            };
            reader.readAsDataURL(file);
          }}
        />
        <img src={form.image} alt="Превью" width={120} />
        <label htmlFor="brand">Бренд</label>
        <input
          name="brand"
          id="brand"
          type="text"
          required
          value={form.brand}
          onChange={(e) => {
            dispatch({
              type: CHANGE_FIELD,
              payload: { ...form, brand: e.target.value },
            });
          }}
        />
        <div className="field-check">
          <input
            name="original"
            id="original"
            type="checkbox"
            checked={form.original}
            onChange={(e) => {
              dispatch({
                type: CHANGE_FIELD,
                payload: { ...form, original: e.target.checked },
              });
            }}
          />
          <label htmlFor="original">Оригинал</label>
        </div>
        <label htmlFor="price">Цена</label>
        <input
          name="price"
          id="price"
          type="number"
          required
          value={form.price}
          onChange={(e) => {
            dispatch({
              type: CHANGE_FIELD,
              payload: { ...form, price: e.target.value },
            });
          }}
        />
        <label htmlFor="count">В наличии</label>
        <input
          name="count"
          id="count"
          type="number"
          required
          value={form.count}
          onChange={(e) => {
            dispatch({
              type: CHANGE_FIELD,
              payload: { ...form, count: e.target.value },
            });
          }}
        />
        <div className="form-actions">
          <button type="submit">Save</button>
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
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
