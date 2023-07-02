import React from 'react'
import Wrapper from "../assets/wrappers/CardQuiz"
import moment from 'moment'

const CardQuiz = ({quizze}) => {

const percent = Math.floor(quizze.correct/quizze.totalQuizzes*100)
console.log(quizze)
  return (
    <Wrapper>
      <h1 className='card-title'>{quizze.name}</h1>
      <p className='card-paragraph'>Number of correct answers: {quizze.correct}/{quizze.totalQuizzes} </p>
      <p className='card-paragraph'>Time: {moment.unix(quizze.time).format("mm:ss")}</p>
      <p className='card-paragraph'>Score: {percent}%</p>
    </Wrapper>
  )
}

export default CardQuiz

