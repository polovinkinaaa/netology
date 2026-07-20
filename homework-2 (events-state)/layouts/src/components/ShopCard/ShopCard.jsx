import "./ShopCard.css";
function ShopCard({ card }) {
  return (
    <div className="shop-card">
      <img src={card.img} alt={card.name} />
      <div className="name"> {card.name} </div>
      <div className="color"> {card.color} </div>
      <div className="footer-price">
        <div className="price"> ${card.price} </div>
        <button className="btn btn-outline btn-error">Add to cart</button>
      </div>
    </div>
  );
}
export default ShopCard;
