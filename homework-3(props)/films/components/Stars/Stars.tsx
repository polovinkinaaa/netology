import Star from "../Star/Star.tsx";
import "./Stars.css";
type CountStairs = {
  count?: number;
};

function Stars({ count = 0 }: CountStairs) {
  const isCorrectCount: boolean = count >= 1 && count <= 5; //�� ������ ������ �� �� ���� �����, �� ���� ��� �������� ����� ����� � ����������� ����
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
