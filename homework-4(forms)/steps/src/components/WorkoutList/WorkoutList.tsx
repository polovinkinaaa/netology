import Workout from "../Workout/Workout.tsx";
import "./WorkoutList.css";

function WorkoutList() {
  return (
    <div className="workout-list">
      <div className="title">
        <div className="date">Дата (ДД.ММ.ГГГГ)</div>
        <div className="distance">Пройдено км</div>
        <div className="action">Действия</div>
      </div>
      <div className="history">
        <Workout />
      </div>
    </div>
  );
}

export default WorkoutList;
