import {Component} from 'react'
import CartContext from './context/CartContext'
import Header from './components/Header'
import Item from './components/Item'
import CategoryItems from './components/CategoryItems'

import './App.css'

// write your code here
class App extends Component {
  state = {
    cartCount: 0,
    data: [],
    menuCategory: [],
    activeCategory: '',
    loading: true,
  }

  // getConvertedCategoryDishes = obj => {
  //   return {
  //     addonCat: obj.addonCat,
  //     dishAvailability: obj.dish_Availability,
  //     dishType: obj.dish_Type,
  //     dishCalories: obj.dish_calories,
  //     dishCurrency: obj.dish_currency,
  //     dishDescription: obj.dish_description,
  //     dishId: obj.dish_id,
  //     dishImage: obj.dish_image,
  //     dishName: obj.dish_name,
  //     dishPrice: obj.dish_price,
  //   }
  // }

  componentDidMount() {
    this.getItems()
  }

  getItems = async () => {
    const response = await fetch(
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      {method: 'GET'},
    )
    if (response.ok) {
      const data = await response.json()
      console.log(data)

      const updatedData = this.convertToCamelCase(data[0])

      const categoryList = this.getCategoryList(updatedData.tableMenuList)

      this.setState({
        data: updatedData,
        menuCategory: categoryList,
        activeCategory: categoryList[0].menuName,
        loading: false,
      })
    }
  }

  incrementCartCount = () => {
    this.setState(prevState => ({
      cartCount: prevState.cartCount + 1,
    }))
  }

  decrementCartCount = () => {
    const {cartCount} = this.state
    if (cartCount >= 1) {
      this.setState(prevState => ({
        cartCount: prevState.cartCount - 1,
      }))
    }
  }

  getCategoryList = list =>
    list.map(eachItem => this.convertCategoryToCamelCase(eachItem))

  convertCategoryToCamelCase = obj => ({
    categoryDishes: obj.category_dishes,
    menuName: obj.menu_category,
    menuCategoryId: obj.menu_category_id,
  })

  convertToCamelCase = obj => ({
    tableMenuList: obj.table_menu_list,
    branchName: obj.branch_name,
    restaurantName: obj.restaurant_name,
  })

  changeActiveCategory = name => {
    this.setState({activeCategory: name})
  }

  render() {
    const {cartCount, data, menuCategory, activeCategory, loading} = this.state
    console.log(activeCategory)
    // const filtered = menuCategory.filter(
    //   eachItem => eachItem.menuName === activeCategory,
    // )

    // const convertedCategoryDishestoCamel = categoryDishes.map(eachItem =>
    //   this.getConvertedCategoryDishes(eachItem),
    // )

    return (
      <CartContext.Provider
        value={{
          cartCount,
          data,
          menuCategory,
          activeCategory,
          incrementCartCount: this.incrementCartCount,
          decrementCartCount: this.decrementCartCount,
          changeActiveCategory: this.changeActiveCategory,
        }}
      >
        <div className="app-container">
          {loading ? (
            <div>....</div>
          ) : (
            <>
              <Header />
              <Item />
              <CategoryItems />
            </>
          )}
        </div>
      </CartContext.Provider>
    )
  }
}

export default App
