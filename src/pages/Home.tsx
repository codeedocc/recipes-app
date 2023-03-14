import { Veggie, Popular, Meat, Dessert } from '../components'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Veggie />
      <Meat />
      <Dessert />
    </motion.div>
  )
}

export default Home
