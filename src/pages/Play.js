import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"

import {Card} from '../components'
import Wrapper from '../assets/wrappers/Play'

const Play = () => {

  const params = useParams()

  let quizzes = useSelector((state) => state.categories.categories)
  quizzes = quizzes.find(category => category.id == params.id).quizzes
  const name = quizzes[0].category

  return (
    <Wrapper>
      <Card name={name} quizzes={quizzes} key={params.id} id={params.id} />
    </Wrapper>
  )
}

export default Play
