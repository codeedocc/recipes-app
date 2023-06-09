import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CuisineResponse, Result } from '../models/model'
import { Grid, GridCard } from '../StyledComp'

const Cuisine: React.FC = () => {
  const [cuisine, setCuisine] = useState<Result[]>([])
  let params = useParams()

  const getCuisine = async (name: string) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${name}&number=15`
    )

    const recipes: CuisineResponse = await data.json()
    setCuisine(recipes.results)
  }

  useEffect(() => {
    getCuisine(params.type!)
  }, [params.type])

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Link to={'/recipes-app/recipe/' + item.id}>
            <GridCard key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </GridCard>
          </Link>
        )
      })}
    </Grid>
  )
}

export default Cuisine
