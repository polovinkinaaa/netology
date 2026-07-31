import "./Workout.css";
type WorkoutType = {
  date: string;
  distance: number;
  onDelete: (date: string) => void;
  onEdit: (date: string, distance: number) => void;
};
function Workout({ date, distance, onDelete, onEdit }: WorkoutType) {
  return (
    <div className="workout">
      <div className="workout-date">{date}</div>
      <div className="workout-distance">{distance}</div>
      <div className="workout-action">
        <button className="workout-fix" onClick={() => onEdit(date, distance)}>✎</button>
        <button className="workout-delete" onClick={() => onDelete(date)}>
          ✘
        </button>
      </div>
    </div>
  );
}

export default Workout;
