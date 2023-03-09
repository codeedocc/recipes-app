import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { List } from '../utils/styled-components'

const Category: React.FC = () => {
  return (
    <List>
      <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Итальянская</h4>
      </NavLink>
      <NavLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>Американская</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Тайская</h4>
      </NavLink>
      <NavLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Японская</h4>
      </NavLink>
    </List>
  )
}

export default Category
