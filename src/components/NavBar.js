import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { AiFillQuestionCircle } from "react-icons/ai";

import Wrapper from "../assets/wrappers/NavBar"

const NavBar = () => {
  let location = useLocation();

  return (
    <Wrapper>
      <p className='logo-title'>
        <AiFillQuestionCircle className='logo-icon' /> QUIZZES
      </p>
      {(location.pathname.includes("finish") || location.pathname.includes("stats"))
        && <Link className="nav-link" to="/">Home</Link>}
    </Wrapper>
  )
}

export default NavBar
