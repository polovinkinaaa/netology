import type { Offer } from "../../models/OfferModels.tsx";
type ListingProps = {
  items?: Offer[];
};

function Listing({ items = [] }: ListingProps) {
  return (
    <div className="item-list">
      {items.map((item: Offer) => {
        const croppedText: string =
          item.title.length > 50 ? item.title.slice(0, 50) + "…" : item.title;
        const price: string =
          item.currency_code === "USD"
            ? "$" + item.price.toString()
            : item.currency_code == "EUR"
              ? "€" + item.price.toString()
              : item.price.toString() + " " + item.currency_code;
        const classNameLevel: string =
          item.quantity > 20
            ? "level-high"
            : item.quantity <= 10
              ? "level-low"
              : "level-medium";
        return (
          <div key={item.listing_id} className="item">
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{croppedText}</p>
              <p className="item-price">{price}</p>
              <p className={`item-quantity ${classNameLevel}`}>
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
