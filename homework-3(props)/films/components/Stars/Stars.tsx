import Star from "../Star/Star.tsx";
import "./Stars.css";
type CountStars = {
  count?: number;
};

function Stars({ count = 0 }: CountStars) {
  const isCorrectCount: boolean = count >= 1 && count <= 5; //не поняла обязан ли он быть целым, но если что рисуется целое число с округлением вниз
  return (
    <>
      {isCorrectCount ? (
        <ul className="card-body-stars u-clearfix">
          {Array.from({ length: count }, (_, i) => (
            <Star key={i} />
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default Stars;
