import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  totalQuizzes: 0,
  timeInSec: 0,
  results: [],
  correctAnswers: 0,
}

const resultsQuizSlice = createSlice({
  name: 'resultsQuiz',
  initialState,
  reducers: {
    setResults(state, action) {
      state.results.push(action.payload.result);
      state.correctAnswers = action.payload.correct ? state.correctAnswers + 1 : state.correctAnswers;
    },
    setTotal(state, action) {
      state.totalQuizzes = action.payload
    },
    cancelQuiz(state) {
        state.results.splice(0, state.results.length)
        state.totalQuizzes = 0;
        state.timeInSec = 0;
        state.correctAnswers = 0;
    },
    setTime(state, { payload }) {
      state.timeInSec = payload
    }
  }
});

export const {
  setResults, setTotal, cancelQuiz, setTime
} = resultsQuizSlice.actions;

export default resultsQuizSlice.reducer;
