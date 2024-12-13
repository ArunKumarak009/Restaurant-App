import CartContext from '../../context/CartContext'
import DisplayCategoryItems from '../DisplayCategoryItems'
import './index.css'

const CategoryItems = () => (
  <CartContext.Consumer>
    {value => {
      const changeToCamelCaseForCategoryDishes = obj => ({
        addonCat: obj.addonCat,
        dishAvailability: obj.dish_Availability,
        dishType: obj.dish_Type,

        dishCalories: obj.dish_calories,

        dishCurrency: obj.dish_currency,

        dishDescription: obj.dish_description,

        dishId: obj.dish_id,
        dishImage: obj.dish_image,

        dishName: obj.dish_name,

        dishPrice: obj.dish_price,
      })

      const {menuCategory, activeCategory} = value

      const filter = menuCategory.filter(
        eachItem => eachItem.menuName === activeCategory,
      )
      console.log(menuCategory)
      const {categoryDishes} = filter[0]

      const updatedCategoryDishes = categoryDishes.map(eachItem =>
        changeToCamelCaseForCategoryDishes(eachItem),
      )
      console.log(updatedCategoryDishes)

      return (
        <div>
          <ul className="items-card">
            {updatedCategoryDishes.map(eachItem => (
              <DisplayCategoryItems
                key={eachItem.dishId}
                itemDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CategoryItems
