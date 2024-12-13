import {Component} from 'react'
import CartContext from '../../context/CartContext'

const HOC = OriginalComponent => {
  class NewComponent extends Component {
    state = {itemCount: 0}

    incerementItem = () => {
      this.setState(prevState => ({
        itemCount: prevState.itemCount + 1,
      }))
    }

    decrementItem = () => {
      const {itemCount} = this.state
      if (itemCount >= 1) {
        this.setState(prevState => ({
          itemCount: prevState.itemCount - 1,
        }))
      }
    }

    render() {
      const {itemCount} = this.state
      return (
        <CartContext.Consumer>
          {value => {
            const {incrementCartCount, decrementCartCount} = value
            return (
              <OriginalComponent
                itemCount={itemCount}
                decrementItem={this.decrementItem}
                incerementItem={this.incerementItem}
                incrementCartCount={incrementCartCount}
                decrementCartCount={decrementCartCount}
                {...this.props}
              />
            )
          }}
        </CartContext.Consumer>
      )
    }
  }
  return NewComponent
}

export default HOC
