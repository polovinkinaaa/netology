import "./Workout.css";
function Workout() {
  return (
    <>
      <div className="workout">
        <div className="workout-date">05.06.2026</div>
        <div className="workout-distance">4.7</div>
        <div className="workout-action">
          <button className="workout-fix">✎</button>
          <button className="workout-delete">✘</button>
        </div>
      </div>
      <div className="workout">
        <div className="workout-date">05.06.2026</div>
        <div className="workout-distance">13.7</div>
        <div className="workout-action">
          <button className="workout-fix">✎</button>
          <button className="workout-delete">✘</button>
        </div>
      </div>
    </>
  );
}

export default Workout;
