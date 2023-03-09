import { useEffect, useState } from 'react'
import { Recipe, RecipeResponse } from '../models/model'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Wrapper, Card, Gradient } from '../utils/styled-components'
import '@splidejs/splide/dist/css/splide.min.css'

const Popular: React.FC = () => {
  const [popular, setPopular] = useState<Recipe[] | null>(null)

  const getPopular = async () => {
    const check = localStorage.getItem('popular')

    if (check) {
      setPopular(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`
      )

      const data: RecipeResponse = await api.json()
      setPopular(data.recipes)
      localStorage.setItem('popular', JSON.stringify(data.recipes))
    }
  }

  useEffect(() => {
    getPopular()
  }, [])

  return (
    <div>
      <Wrapper>
        <h3>Популярное</h3>

        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem',
          }}
        >
          {popular?.map((recipe) => {
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

export default Popular
