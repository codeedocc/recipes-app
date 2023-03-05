import { useEffect, useState } from 'react'
import { Recipe, RecipeResponse } from '../models/model'

const Popular = () => {
  const [popular, setPopular] = useState<Recipe[] | null>(null)

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`
    )

    const data: RecipeResponse = await api.json()

    setPopular(data.recipes)
  }

  console.log(popular)

  useEffect(() => {
    getPopular()
  }, [])

  return (
    <div>
      {popular?.map((recipe) => {
        return (
          <div>
            <p key={recipe.id}>{recipe.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Popular
