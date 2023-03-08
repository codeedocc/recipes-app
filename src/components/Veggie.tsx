import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useEffect, useState } from 'react'
import { Recipe, RecipeResponse } from '../models/model'
import { Wrapper, Card, Gradient } from '../utils/styled-components'

const Veggie = () => {
  const [veggie, setVeggie] = useState<Recipe[]>([])

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie')

    if (check) {
      setVeggie(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9&tags=vegetarian`
      )

      const data: RecipeResponse = await api.json()
      setVeggie(data.recipes)
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
    }
  }

  useEffect(() => {
    getVeggie()
  }, [])

  return (
    <div>
      <Wrapper>
        <h3>Для вегетарианцев</h3>

        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem',
          }}
        >
          {veggie?.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

export default Veggie
