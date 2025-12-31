import './DishItem.css'

const DishItem = ({dish, quantity, incrementItem, decrementItem}) => {
  const {
    dish_id: dishId,
    dish_name: dishName,
    dish_price: dishPrice,
    dish_currency: dishCurrency,
    dish_description: dishDescription,
    dish_calories: dishCalories,
    dish_image: dishImage,
    dish_Availability: dishAvailability,
    addonCat,
  } = dish

  return (
    <li className="dish-item">
      <div className="dish-info">
        <h1 className="dish-name">{dishName}</h1>
        <p className="dish-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>
        <p className="calories">{dishCalories} calories</p>

        {dishAvailability ? (
          <div className="counter-container">
            <button
              type="button"
              className="counter-btn"
              onClick={() => decrementItem(dishId)}
            >
              -
            </button>
            <p className="quantity">{quantity}</p>
            <button
              type="button"
              className="counter-btn"
              onClick={() => incrementItem(dishId)}
            >
              +
            </button>
          </div>
        ) : (
          <p className="not-available">Not available</p>
        )}

        {addonCat.length > 0 && (
          <p className="customization">Customizations available</p>
        )}
      </div>

      <img src={dishImage} alt={dishName} className="dish-image" />
    </li>
  )
}

export default DishItem
