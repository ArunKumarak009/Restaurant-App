import {CgShoppingCart} from 'react-icons/cg'
import CartContext from '../../context/CartContext'
import './index.css'

const Header = () => (
  <CartContext.Consumer>
    {value => {
      const {cartCount, data} = value
      const {restaurantName} = data
      console.log(data)

      return (
        <div className="Header-container">
          <h1>{restaurantName}</h1>
          <div className="my-orders-container">
            <p className="text-my-orders">My Orders</p>

            <div className="cart-icon-container">
              <CgShoppingCart className="cart-icon" />
              <span className="cart-count">{cartCount}</span>
            </div>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Header
