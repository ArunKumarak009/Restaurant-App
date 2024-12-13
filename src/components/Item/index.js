import CartContext from '../../context/CartContext'

import NameBar from '../NameBar'
import './index.css'

const Item = () => (
  <CartContext.Consumer>
    {value => {
      const {menuCategory, activeCategory, changeActiveCategory} = value

      return (
        <>
          <ul className="category-names">
            {menuCategory.map(eachitem => (
              <NameBar
                key={eachitem.menuCategoryId}
                isActive={eachitem.menuName === activeCategory}
                categoryDetails={eachitem}
                changeActiveCategory={changeActiveCategory}
              />
            ))}
          </ul>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Item
