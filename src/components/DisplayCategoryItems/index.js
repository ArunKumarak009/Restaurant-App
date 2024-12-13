import './index.css'
import HOC from '../HOC'

const DisplayCategoryItems = props => {
  const {
    itemDetails,
    itemCount,
    decrementItem,
    incerementItem,
    incrementCartCount,
    decrementCartCount,
  } = props
  const {
    addonCat,
    dishAvailability,
    dishCalories,
    dishDescription,

    dishImage,
    dishName,
    dishPrice,

    dishCurrency,
  } = itemDetails

  const onClickDecrement = () => {
    if (itemCount !== 0) {
      decrementItem()
      decrementCartCount()
    }
  }

  const onClickIncrement = () => {
    incerementItem()
    incrementCartCount()
  }

  const custamizeText = addonCat.length > 0 && <p>Customizations available</p>
  const notAvailableText = !dishAvailability && 'Not available'
  const displayButtons = dishAvailability && (
    <div className="btn-container">
      <button type="button" className="operator-btn" onClick={onClickDecrement}>
        -
      </button>
      <p className="count-item">{itemCount}</p>
      <button type="button" className="operator-btn" onClick={onClickIncrement}>
        +
      </button>
    </div>
  )

  return (
    <li className="card-item">
      <div className="details-container">
        <div className="item-description-container">
          <h1 className="dish-name">{dishName}</h1>
          <p className="dish-price">
            {dishCurrency} {dishPrice}
          </p>
          <p className="dish-desption">{dishDescription}</p>
          {displayButtons}

          {custamizeText}
          <p className="not-available-text">{notAvailableText}</p>
        </div>
        <p className="calories-text">{dishCalories} calories</p>
        <img src={dishImage} alt="item" className="item-image" />
      </div>
    </li>
  )
}

export default HOC(DisplayCategoryItems)
