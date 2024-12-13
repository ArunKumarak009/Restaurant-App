import './index.css'

const NameBar = props => {
  const {categoryDetails, isActive, changeActiveCategory} = props
  const {menuName} = categoryDetails

  const btnColorClassName = isActive ? 'btn-active' : ' '

  const changeCategory = () => {
    changeActiveCategory(menuName)
  }

  return (
    <li className="text-name-category">
      <button
        type="button"
        className={`btn-category ${btnColorClassName}`}
        onClick={changeCategory}
      >
        {menuName}
      </button>
    </li>
  )
}

export default NameBar
