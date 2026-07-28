import type { Offer } from "../../models/OfferModels.tsx";
import {
  getPrice,
  croppedLongText,
  getClassNameLevel,
} from "../../assets/functions.tsx";
type ListingProps = {
  items?: Offer[];
};

function Listing({ items = [] }: ListingProps) {
  return (
    <div className="item-list">
      {items.map((item: Offer) => {
        return (
          <div key={item.listing_id} className="item">
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{croppedLongText(item.title)}</p>
              <p className="item-price">
                {getPrice(item.price, item.currency_code)}
              </p>
              <p
                className={`item-quantity ${getClassNameLevel(item.quantity)}`}
              >
                {item.quantity} left
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Listing;
