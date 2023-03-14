import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useEffect, useState } from 'react'
import { Recipe, RecipeResponse } from '../models/model'
import { Wrapper, Card, Gradient } from '../StyledComp'
import { useScreenWidth } from '../hooks/ScreenWidth'
import { Link } from 'react-router-dom'

const Meat: React.FC = () => {
  const [meat, setMeat] = useState<Recipe[]>([])

  const getMeat = async () => {
    const check = localStorage.getItem('meat')

    if (check) {
      setMeat(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9&tags=meat`
      )

      const data: RecipeResponse = await api.json()
      setMeat(data.recipes)
      localStorage.setItem('meat', JSON.stringify(data.recipes))
    }
  }

  useEffect(() => {
    getMeat()
  }, [])

  return (
    <div>
      <Wrapper>
        <h3>Мясное</h3>

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
          {meat?.map((recipe) => {
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

export default Meat
