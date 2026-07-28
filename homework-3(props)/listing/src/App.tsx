import Listing from "./components/Listing.tsx";
import type { Offer } from "../models/OfferModels.tsx";
import data from "../assets/data.json";
import { getNeedData } from "../assets/functions.tsx";

function App() {
  const offers: Offer[] = getNeedData(data as Offer[]);
  return (
    <>
      <Listing items={offers} />
    </>
  );
}

export default App;
