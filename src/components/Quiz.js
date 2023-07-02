import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Wrapper from "../assets/wrappers/Quiz"
import { cancelQuiz } from '../store/slices/ResultsQuiz.slice';

const Quiz = ({ quiz }) => {
  const dispatch = useDispatch()
  
  const startQuiz = () => {
    dispatch(cancelQuiz())
  }
  return (
    <Wrapper src={quiz.imgUrl}>
      <div className="quiz-banner">
      </div>
      <h1 className='quiz-name'>
        {quiz.name}
      </h1>
      <p className='quiz-count'>
        Number of questions: {quiz.countOfQuizzes}
      </p>
      <Link to={`/play/${quiz.id}`}>
        <button disabled={quiz.countOfQuizzes == 0 ? true : false} onClick={startQuiz} className='quiz-start-btn'
        >
          Start Quiz
        </button>
      </Link>
    </Wrapper>
  )
}

export default Quiz
