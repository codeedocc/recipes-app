import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useEffect, useState } from 'react'
import { Recipe, RecipeResponse } from '../models/model'
import { Wrapper, Card, Gradient } from '../StyledComp'
import { useScreenWidth } from '../hooks/ScreenWidth'
import { Link } from 'react-router-dom'

const Dessert: React.FC = () => {
  const [dessert, setDessert] = useState<Recipe[]>([])

  const getDessert = async () => {
    const check = localStorage.getItem('dessert')

    if (check) {
      setDessert(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9&tags=dessert`
      )

      const data: RecipeResponse = await api.json()
      setDessert(data.recipes)
      localStorage.setItem('dessert', JSON.stringify(data.recipes))
    }
  }

  useEffect(() => {
    getDessert()
  }, [])

  return (
    <div>
      <Wrapper>
        <h3>Десерты</h3>

        <Splide
          key={useScreenWidth()}
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem',
            breakpoints: {
              1200: {
                perPage: 3,
                gap: '2rem',
              },
              768: {
                perPage: 1,
              },
            },
          }}
        >
          {dessert?.map((recipe) => {
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

export default Dessert
