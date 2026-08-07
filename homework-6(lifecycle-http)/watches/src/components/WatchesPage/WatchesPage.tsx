import WatchForm from "../WatchForm/WatchForm.tsx";
import WatchList from "../WatchList/WatchList.tsx";
import { useState } from "react";
import { isValidTimeZone, type WatchType } from "../../utils/functions.ts";

function WatchesPage() {
  const [watchData, setWatchData] = useState<WatchType[]>([]);
  const handleSubmit = (capital: string, timezone: string) => {
    if (!capital || !isValidTimeZone(timezone)) {
      console.error("Please enter a valid details");
    } else {
      const newValue: WatchType = {
        id: crypto.randomUUID(),
        capital: capital,
        timezone: Number(timezone),
      };
      setWatchData((prev: WatchType[]) => [...prev, newValue]);
    }
  };
  return (
    <div className="watches-page">
      <WatchForm handleSubmit={handleSubmit} />
      <WatchList list={watchData} />
    </div>
  );
}

export default WatchesPage;
