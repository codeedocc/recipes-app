import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { List, SLink } from '../utils/styled-components'

const Category: React.FC = () => {
  return (
    <List>
      <SLink to={'/recipes-app/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Италия</h4>
      </SLink>
      <SLink to={'/recipes-app/cuisine/American'}>
        <FaHamburger />
        <h4>Америка</h4>
      </SLink>
      <SLink to={'/recipes-app/cuisine/Thai'}>
        <GiNoodles />
        <h4>Тайланд</h4>
      </SLink>
      <SLink to={'/recipes-app/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Япония</h4>
      </SLink>
    </List>
  )
}

export default Category
