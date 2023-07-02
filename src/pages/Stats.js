import React from "react";
import { useSelector } from 'react-redux';

import Wrapper from "../assets/wrappers/Stats"
import { StatsBanner, CardQuiz } from '../components';

const Stats = () => {
  const stats = useSelector(state => state.stats.quizzes)
 
  return (
    <Wrapper>
        <StatsBanner />
    {    stats.length>0?
        <div className="stats-quizzes">
         <div className="stats-quizzes-title"><p>Passed quizzes:</p></div>
          {stats.map((quizze,i) => <CardQuiz key={i} quizze={quizze} />)}
      </div>
      :null}

    </Wrapper>
  )
}

export default Stats
