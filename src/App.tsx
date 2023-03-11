import { Category, Search } from './components'
import { Pages } from './pages'

const App: React.FC = () => {
  return (
    <div>
      <Search />
      <Category />
      <Pages />
    </div>
  )
}

export default App
