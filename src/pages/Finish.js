import React, { useState } from 'react'
import moment from 'moment'
import { useSelector } from "react-redux"

import Wrapper from '../assets/wrappers/Finish'
import {FinishBanner,CardStatistics} from "../components"

const Finish = () => {
  const [showStatistics, setShowStatistics] = useState(false)
  const results = useSelector(state => state.resultsQuiz)

  const onShowStatistics = () => {
    setShowStatistics(true)
  }
  
  return (
    <Wrapper>
      <FinishBanner onShowStatistics={onShowStatistics} time={moment.unix(results.timeInSec).format("mm:ss")} correct={results.correctAnswers} all={results.totalQuizzes}/>
      <section className='finish-statistics'>
      {!showStatistics ? null : <>
        {results.results.map((e,i) => <CardStatistics total={results.totalQuizzes} id={i} key={i} questionInfo={e} />)}
      </>}
      </section>

    </Wrapper>
  )
}

export default Finish
