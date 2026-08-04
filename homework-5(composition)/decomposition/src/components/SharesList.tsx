/** Список курсов валют*/
import Share from "./Share.tsx";

function SharesList() {
  return (
    <>
      <Share name="USD MOEX" value={63.52} sign="+" difference={0.09} />
      <Share name="EUR MOEX" value={70.86} sign="+" difference={0.14} />
      <Share name="НЕФТЬ" value={64.9} sign="+" difference={1.63} />
    </>
  );
}

export default SharesList;
