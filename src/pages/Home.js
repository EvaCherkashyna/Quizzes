import React from 'react'
import Wrapper from '../assets/wrappers/Home'
import { ListOfQuizzes, HomeBanner } from "../components"


const Home = () => {

  return (
    <Wrapper>
      <HomeBanner />
      <ListOfQuizzes />
    </Wrapper>
  )
}

export default Home
