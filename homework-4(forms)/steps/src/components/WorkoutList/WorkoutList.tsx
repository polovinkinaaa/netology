import Workout from "../Workout/Workout.tsx";
import "./WorkoutList.css";

function WorkoutList({
  list,
  onDelete,
  onEdit,
}: {
  list: [string, number][];
  onDelete: (date: string) => void;
    onEdit: (date: string, distance: number) => void;
}) {
  return (
    <div className="workout-list">
      <div className="title">
        <div className="date">Дата (ДД.ММ.ГГГГ)</div>
        <div className="distance">Пройдено км</div>
        <div className="action">Действия</div>
      </div>
      <div className="history">
        {list.map(([date, distance]) => (
          <Workout
            key={date}
            date={date}
            distance={distance}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkoutList;
