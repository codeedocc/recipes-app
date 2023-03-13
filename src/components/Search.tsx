import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FormStyle } from '../utils/styled-components'
import { useNavigate } from 'react-router-dom'

const Search: React.FC = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    navigate('/recipes-app/searched/' + input)
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  )
}

export default Search
