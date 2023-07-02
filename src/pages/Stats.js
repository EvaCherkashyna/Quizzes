import React from "react";
import { useSelector } from 'react-redux';

import Wrapper from "../assets/wrappers/Stats"
import { StatsBanner, CardQuiz } from '../components';

const Stats = () => {
  const stats = useSelector(state => state.stats.quizzes)
 
  return (
    <Wrapper>
        <StatsBanner />
        <div className="stats-quizzes">
          {stats.map((quizze,i) => <CardQuiz key={i} quizze={quizze} />)}
      </div>

    </Wrapper>
  )
}

export default Stats
