import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 4rem 0rem;

  @media (max-width: 768px) {
    h3 {
      display: flex;
      justify-content: center;
    }
  }
`

export const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`
export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`

export const GridCard = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    padding-top: 10px;
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0rem;
    margin-left: 0rem;

    h4 {
      font-size: 8px;
    }
  }
`

export const FormStyle = styled.form`
  display: flex;
  justify-content: center;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`
export const DetailWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }

  li {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }

  img {
    border-radius: 15px;
  }

  @media (max-width: 768px) {
    img {
      width: 250px;
      height: 250px;
    }
  }
`

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  font-weight: 600;
  margin-top: 1rem;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  min-width: 100%;

  li {
    list-style: inside;
  }

  @media (max-width: 768px) {
    margin-top: 0rem;

    h3 {
      font-size: 12px;
    }

    li {
      font-size: 14px;
    }
  }
`

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`
export const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`
