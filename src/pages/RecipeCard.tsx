import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Recipe } from '../models/model'
import { Button, DetailWrapper, Info } from '../utils/styled-components'

const RecipeCard: React.FC = () => {
  const [details, setDetails] = useState<Recipe>()
  const [activeBtn, setActiveBtn] = useState('Рецепт')
  let params = useParams()

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
    )

    const detailData: Recipe = await data.json()
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])

  return (
    <DetailWrapper>
      <div>
        <h2>{details?.title}</h2>
        <img src={details?.image} alt={details?.title} />
      </div>

      <Info>
        <Button
          className={activeBtn === 'Рецепт' ? 'active' : ''}
          onClick={() => setActiveBtn('Рецепт')}
        >
          Рецепт
        </Button>
        <Button
          className={activeBtn === 'Ингридиенты' ? 'active' : ''}
          onClick={() => setActiveBtn('Ингридиенты')}
        >
          Ингридиенты
        </Button>

        {activeBtn === 'Рецепт' && (
          <div>
            {details?.summary && (
              <h3 dangerouslySetInnerHTML={{ __html: details!.summary }}></h3>
            )}
            {details?.instructions && (
              <h3
                dangerouslySetInnerHTML={{ __html: details?.instructions }}
              ></h3>
            )}
          </div>
        )}

        {activeBtn === 'Ингридиенты' && (
          <ul>
            {details?.extendedIngredients.map((ingridient) => {
              return <li key={ingridient.id}>{ingridient.original}</li>
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

export default RecipeCard
