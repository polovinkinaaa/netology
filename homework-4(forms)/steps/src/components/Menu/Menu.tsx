import WorkoutList from "../WorkoutList/WorkoutList.tsx";
import "./Menu.css";
function Menu() {
  return (
    <div className="menu">
      <form className="add-date">
        <label htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
        <input name="date" type="text" />
        <label htmlFor="distance">Пройдено км</label>
        <input name="distance" type="text" />
        <button type="submit">OK</button>
      </form>
      <WorkoutList />
    </div>
  );
}

export default Menu;
