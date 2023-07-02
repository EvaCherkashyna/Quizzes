import React from 'react'
import Wrapper from "../assets/wrappers/CardStatistics"

import classnames from 'classnames'

const CardStatistics = ({ questionInfo,id,total }) => {

const isCorectClassName = questionInfo.isCorrect?"correct":"incorrect"
  return (
    <Wrapper>
      <span className="card-question-count">{id+1}/{total}</span>
      <p className='card-question'>{questionInfo.question}</p>
     <ul> {questionInfo.allAnswers.map((e) =>
       <li className={classnames('card-answer',questionInfo.yourAnswer==e && isCorectClassName)}>{e}</li>)}
       </ul>
       <p className='card-title'>Correct Answer: {questionInfo.correctAnswer} </p>
       <p className='card-title'>Score: {Number(questionInfo.isCorrect)}/1</p>
    </Wrapper>
  )
}

export default CardStatistics
