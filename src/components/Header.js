import './Header.css'

const Header = ({restaurantName, cartCount}) => (
  <nav className="header">
    <h1 className="restaurant-name">{restaurantName}</h1>
    <div className="orders-container">
      <p className="orders-text">My Orders</p>
      <p className="cart-count">{cartCount}</p>
    </div>
  </nav>
)

export default Header
