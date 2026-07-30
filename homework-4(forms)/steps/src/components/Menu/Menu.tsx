import WorkoutList from "../WorkoutList/WorkoutList.tsx";
import "./Menu.css";
import { useState } from "react";
import * as React from "react";
import {
  isValidDate,
  isValidDistance,
  addData,
  deleteData,
  getSortedArray,
} from "../../utils/function.tsx";

function Menu() {
  const [formData, setFormData] = useState({ date: "", distance: "" });
  const [workoutData, setWorkoutData] = useState<Map<string, number>>(
    new Map(),
  );

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidDate(formData.date) || !isValidDistance(formData.distance)) {
      console.error("Please enter a valid details");
    } else {
      setWorkoutData(
        addData(workoutData, formData.date, Number(formData.distance)),
      );
      setFormData({ date: "", distance: "" });
    }
  };

  const handleDelete = (date: string) => {
    setWorkoutData(deleteData(workoutData, date));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="menu">
      <form className="add-date" onSubmit={handleSubmit}>
        <label htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
        <input
          name="date"
          type="text"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="distance">Пройдено км</label>
        <input
          name="distance"
          type="text"
          value={formData.distance}
          onChange={handleChange}
        />
        <button type="submit">OK</button>
      </form>
      <WorkoutList
        list={getSortedArray(workoutData)}
        onDelete={(e) => handleDelete(e)}
      />
    </div>
  );
}

export default Menu;
