import React, { useEffect, useState } from 'react'
import moment from 'moment';
import classnames from 'classnames';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cancelQuiz, setResults, setTotal, setTime } from '../store/slices/ResultsQuiz.slice';
import Wrapper from "../assets/wrappers/Card"
import { setName, setResultQuiz } from '../store/slices/Stats.slice';

const Card = ({ name, quizzes, id }) => {
  const [answers, setAnswers] = useState()
  const [numOfQuestion, setNumOfQuestion] = useState(0);
  const [choosenAnswer, setChoosenAnswer] = useState();
  const [myAnswer, setMyAnswer] = useState(null);
  const [finish, setFinish] = useState(false);
  const [warning, setWarninig] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState();
  const dispatch = useDispatch()

  const turnTimerOn = () => {
    const id = setInterval(() => setSeconds(prev => prev + 1), 1000)
    setIntervalId(id)
  }


  useEffect(() => {
    dispatch(setTotal(quizzes.length))
    turnTimerOn()
  }, [])

  useEffect(() => {
    const shuffle = (array) => {
      array.sort(() => Math.random() - 0.5);
    }
    const arrAnswears = [quizzes[numOfQuestion].correct_answer, ...quizzes[numOfQuestion].incorrect_answers];
    shuffle(arrAnswears);
    setAnswers(arrAnswears);
  }, [numOfQuestion])


  const turnTimerOff = () => {
    clearInterval(intervalId);
  }

  const onAnswear = (yourAnswer, index) => {
    setChoosenAnswer(index)
    const correct = yourAnswer == quizzes[numOfQuestion].correct_answer
    setMyAnswer({
      result: {
        correctAnswer: quizzes[numOfQuestion].correct_answer,
        yourAnswer,
        isCorrect: correct,
        question: quizzes[numOfQuestion].question,
        incorrectAnswers: quizzes[numOfQuestion].incorrect_answers,
        allAnswers: answers
      }, correct
    })
  }
  const onNext = () => {
    if (myAnswer) {
      dispatch(setResults(myAnswer))

      if (quizzes.length == numOfQuestion + 1) {
        setFinish(true)
        turnTimerOff()
        dispatch(setTime(seconds))
        dispatch(setName(name))
        dispatch(setResultQuiz())
      }
      else {
        setNumOfQuestion(prev => prev + 1)
        setChoosenAnswer(null)
        setMyAnswer(null)
        setWarninig(false)
      }
    }
    else {
      setWarninig(true)
    }
  }
  const onCancel = () => {
    dispatch(cancelQuiz())
    turnTimerOff()
  }

  return (
    <Wrapper >
      {!finish ? <>
        <span className='card-question-count'>{numOfQuestion + 1}/{quizzes.length}</span>
        <p className='card-question'>{quizzes[numOfQuestion].question}</p>
        <ul className="card-answers-list">
          {answers && answers.map((answer, i) =>
            <li key={i} className={classnames(`card-answer`, choosenAnswer == i ? "card-answer-choosed" : "")}
              onClick={() => onAnswear(answer, i)}>
              {answer}
            </li>)}</ul>
        {warning && <p className="card-warning">Please choose smth!!!</p>}
        <div className="card-btn-wrapper">
          <Link to="/"> <button className="card-btn card-cancel-btn" onClick={onCancel}>Cancel a quiz</button></Link>
          <button className=" card-btn card-next-btn" onClick={onNext}>Next question</button>
        </div>
        <p className="card-time">Time: {moment.unix(seconds).format("mm:ss")}</p>
      </>
        : <Navigate to={`/finish/${id}`} replace={true} />
      }
    </Wrapper>
  )
}

export default Card
