/** Вся информация о валюте*/
type ShareType = {
  name: string;
  value: number;
  sign: string;
  difference: number;
};
function Share({ name, value, sign, difference }: ShareType) {
  return (
    <>
      <div>{name}</div>
      <div>{value}</div>
      <div>
        {sign} {difference}
      </div>
    </>
  );
}

export default Share;
