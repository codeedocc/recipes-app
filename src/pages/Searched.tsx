import { useEffect, useState } from 'react'
import { CuisineResponse, Result } from '../models/model'
import { Link, useParams } from 'react-router-dom'
import { Grid, GridCard } from '../StyledComp'

const Searched: React.FC = () => {
  const [searchedRecipes, setSearchedRecipes] = useState<Result[]>([])
  const params = useParams()

  const getSearched = async (name: string) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${name}`
    )

    const recipes: CuisineResponse = await data.json()
    setSearchedRecipes(recipes.results)
  }

  useEffect(() => {
    getSearched(params.search!)
  }, [params.search])

  return (
    <Grid>
      {searchedRecipes.map((item) => {
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

export default Searched
