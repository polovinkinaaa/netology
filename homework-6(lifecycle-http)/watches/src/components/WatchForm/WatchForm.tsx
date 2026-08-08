import { useState } from "react";
import * as React from "react";
import "./WatchForm.css";

function WatchForm({
  handleSubmit,
}: {
  handleSubmit: (capital: string, timezone: string) => void;
}) {
  const [formData, setFormData] = useState({ capital: "", timezone: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="watch-form">
      <form
        className="add-watch"
        onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSubmit(formData.capital, formData.timezone);
          setFormData({ capital: "", timezone: "" });
        }}
      >
        <label htmlFor="capital">Название</label>
        <input
          name="capital"
          id="capital"
          type="text"
          value={formData.capital}
          onChange={handleChange}
        />
        <label htmlFor="timezone">Временная зона</label>
        <input
          name="timezone"
          id="timezone"
          type="text"
          value={formData.timezone}
          onChange={handleChange}
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default WatchForm;
