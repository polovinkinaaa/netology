import "./ShopItem.css"
function ShopItem({item}) {
    return (
        <div className="shop-item">
            <img src={item.img} alt={item.category} />
            <div className="name"> {item.name} </div>
            <div className="color"> {item.color} </div>
            <div className="price"> ${item.price} </div>
            <button className="btn btn-outline btn-error" >Add to card</button>
        </div>
    )
}
export default ShopItem;