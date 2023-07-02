import React from 'react'
import Wrapper from '../assets/wrappers/FinishBanner'
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FinishBanner = ({ showStatistics,correct, all ,onShowStatistics}) => {

  const percentScore = Math.floor(correct / all * 100);

  return (
    <Wrapper>
      <h1 className='finish-title'><AiFillCheckCircle className='finish-icon' />Your Score: {percentScore}%</h1>
      {percentScore <= 50 ? <p className="finish-message">
        Great job on attempting the quiz! Even though you didn't score higher than 50%, it's important to remember that the real success lies in the effort you put in. Keep going, stay positive, and with continued practice, you'll surely improve your results. Remember, progress is made one step at a time, and you're on the right path!</p> : <p>
        Congratulations on completing the quiz with a score of more than 50%! That's a fantastic achievement! You should be proud of yourself for your knowledge and dedication. Keep striving for excellence, and we are confident you'll achieve even greater results in the future!</p>}
        <button className='finish-btn' onClick={onShowStatistics}>
        {showStatistics ?"Hide statistics":"Show statistics"}
  
          </button>
    </Wrapper>
  )
}

export default FinishBanner
