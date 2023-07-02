import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  amountQuizzes: 0,
  quizzes: [],
  correctAnswers: 0,
  incorrectAnswers: 0,
  totalTime: 0,
  name:''
}

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setResultQuiz() { },
    setQuiz(state, { payload }) {
      state.quizzes.push(payload.quizzes);
      state.amountQuizzes+=1;
      state.correctAnswers+=payload.correct;
      state.incorrectAnswers+=payload.incorrect;
      state.totalTime+=payload.time;

    },
    setName(state,{payload}){
      state.name=payload
    }
  }
});

export const {
  setResultQuiz,setQuiz,setName
} = statsSlice.actions;

export default statsSlice.reducer;
