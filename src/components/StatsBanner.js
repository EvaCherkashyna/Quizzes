import React from 'react'
import { useSelector } from 'react-redux';
import { AiFillQuestionCircle, AiFillCheckCircle, AiFillClockCircle } from "react-icons/ai";
import moment from 'moment';

import Wrapper from '../assets/wrappers/StatsBanner'

const StatsBanner = () => {
  const stats = useSelector(state => state.stats)
  const totalCorrectPercent = Math.floor(stats.correctAnswers / (stats.correctAnswers + stats.incorrectAnswers) * 100)
  return (
    <div>{
      stats.quizzes.length==0
      ?  <Wrapper>
      <h1 className='banner-title'>You haven't taken the quiz yet.</h1>
      <p className="banner-paragraph"> Please, return to home page.</p>
    </Wrapper>:
        
        <Wrapper>
        <h1 className='banner-title'>Your Average Score: {totalCorrectPercent}%</h1>
        <p className="banner-paragraph"><AiFillCheckCircle className='banner-icon' /> Passed quizzes:{stats.amountQuizzes}</p>
        <p className="banner-paragraph"><AiFillClockCircle className='banner-icon' /> Average quiz time: {moment.unix(stats.totalTime).format("mm:ss")}</p>
        <p className="banner-paragraph"><AiFillQuestionCircle className='banner-icon' /> Correct answers: {stats.correctAnswers}/{stats.correctAnswers + stats.incorrectAnswers}</p>
      </Wrapper>
    }

    </div>
  )
}

export default StatsBanner
