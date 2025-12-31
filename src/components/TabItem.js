import './TabItem.css'

const TabItem = ({tabDetails, isActive, setActiveTab}) => {
  const {menu_category: menuCategory} = tabDetails

  return (
    <button
      type="button"
      className={`tab-button ${isActive ? 'active-tab' : ''}`}
      onClick={() => setActiveTab(menuCategory)}
    >
      {menuCategory}
    </button>
  )
}

export default TabItem
