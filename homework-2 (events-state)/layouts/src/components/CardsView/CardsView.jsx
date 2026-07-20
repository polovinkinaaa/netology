import ShopCard from '../ShopCard/ShopCard.jsx'

function CardsView({cards}) {
    return (
        <div className="cards-view">
            {cards.map((card, index)  =>
                <ShopCard key={index} card={card} />)}
        </div>
    )
}

export default CardsView
