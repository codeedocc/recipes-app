import { Category, Search } from './components'
import { Pages } from './pages'
import { Logo, Nav } from './StyledComp'
import { GiKnifeFork } from 'react-icons/gi'

const App: React.FC = () => {
  return (
    <div>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/recipes-app'}>delicious</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  )
}

export default App
