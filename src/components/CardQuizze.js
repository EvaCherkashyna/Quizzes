import React from 'react'
import Wrapper from "../assets/wrappers/CardQuiz"

const CardQuiz = ({quizze}) => {

const percent = Math.floor(quizze.correct/quizze.totalQuizzes*100)

  return (
    <Wrapper>
      <h1 className='card-title'>{quizze.name}</h1>
      <p className='card-paragraph'>Number of correct answers: {quizze.correct}/{quizze.totalQuizzes} </p>
      <p className='card-paragraph'>Score: {percent}%</p>
    </Wrapper>
  )
}

export default CardQuiz

