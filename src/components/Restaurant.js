import {useEffect, useState} from 'react'
import Header from './Header'
import TabItem from './TabItem'
import DishItem from './DishItem'

const dishesApiUrl =
  'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState(null)
  const [activeTab, setActiveTab] = useState(null)
  const [cart, setCart] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dishesApiUrl)
      const data = await response.json()

      const restaurant = data[0]

      setRestaurantData(restaurant)
      setActiveTab(restaurant.table_menu_list[0].menu_category)
    }

    fetchData()
  }, [])

  if (restaurantData === null || activeTab === null) {
    return null
  }

  const {
    restaurant_name: restaurantName,
    table_menu_list: tableMenuList,
  } = restaurantData

  const activeCategory =
    tableMenuList.find(each => each.menu_category === activeTab) ||
    tableMenuList[0]

  const incrementItem = id => {
    setCart(prev => ({...prev, [id]: (prev[id] || 0) + 1}))
  }

  const decrementItem = id => {
    setCart(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }))
  }

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)

  return (
    <>
      <Header restaurantName={restaurantName} cartCount={cartCount} />

      <div className="tabs-container">
        {tableMenuList.map(tab => (
          <TabItem
            key={tab.menu_category_id}
            tabDetails={tab}
            isActive={tab.menu_category === activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>

      <ul>
        {activeCategory.category_dishes.map(dish => (
          <DishItem
            key={dish.dish_id}
            dish={dish}
            quantity={cart[dish.dish_id] || 0}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
          />
        ))}
      </ul>
    </>
  )
}

export default Restaurant
