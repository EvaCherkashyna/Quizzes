import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Quiz from './Quiz';
import Wrapper from "../assets/wrappers/ListOfQuizzes"
import { getCategories } from '../store/slices/Categories.slice';

const ListOfQuizzes = () => {

  const dispatch = useDispatch()
  const { categories, pending } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  return (
    <Wrapper>
      {pending ? <p>Loading...</p> 
       : categories.map((quiz, i) => <Quiz key={i} quiz={quiz}></Quiz>)}
    </Wrapper>
  )
}

export default ListOfQuizzes
