import React from 'react'

const CartContext = React.createContext({
  cartCount: 0,
  data: [],
  menuCategory: [],
  activeCategory: '',
  incrementCartCount: () => {},
  decrementCartCount: () => {},
  changeActiveCategory: () => {},
})

export default CartContext
