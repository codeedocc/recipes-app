import { useEffect, useState } from 'react'
import { Recipe, RecipeResponse } from '../models/model'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Wrapper, Card, Gradient } from '../StyledComp'
import { useScreenWidth } from '../hooks/ScreenWidth'
import { Link } from 'react-router-dom'
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
          key={useScreenWidth()}
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem',
            breakpoints: {
              1200: {
                gap: '2rem',
              },
              768: {
                perPage: 1,
              },
            },
          }}
        >
          {popular?.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={'/recipes-app/recipe/' + recipe.id}>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Card>
                </Link>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

export default Popular
