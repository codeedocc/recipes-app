import { Route, Routes, useLocation } from 'react-router-dom'
import { Home, Cuisine, Searched, RecipeCard } from './'
import { AnimatePresence } from 'framer-motion'

const Pages = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/recipes-app" element={<Home />} />
        <Route path="/recipes-app/cuisine/:type" element={<Cuisine />} />
        <Route path="/recipes-app/searched/:search" element={<Searched />} />
        <Route path="/recipes-app/recipe/:name" element={<RecipeCard />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
