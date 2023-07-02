import React from 'react'
import Wrapper from '../assets/wrappers/HomeBanner'
import { AiFillQuestionCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiFillPieChart } from "react-icons/ai";
const HomeBanner = () => {
  const categories = useSelector((state) => state.categories.categories)
  const stats = useSelector(state => state.stats)

  return (
    <Wrapper>

      <h1 className='home-title'><AiFillQuestionCircle className='home-icon' />
        Quizzes
        <Link to="/stats" className='home-stats' >
          <AiFillPieChart className='home-icon-stats' />
          <span className='home-stats-text'> Go stats</span>
        </Link>
      </h1>
      <p className='home-greating'>Welcome to Quizzes!</p>
      <p>Test your knowledge and challenge yourself with our exciting quizzes. Dive into a world of trivia, facts, and brain teasers designed to entertain and educate. Whether you're a history buff, a pop culture enthusiast, or a science aficionado, we have quizzes to cater to every interest.</p>
      <Link to={`/play/${categories[Math.floor(Math.random() * 10)]?.id}`}>
        <button className='home-btn'>I`m lucky</button>
      </Link>

    </Wrapper>
  )
}

export default HomeBanner
