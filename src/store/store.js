import { configureStore } from '@reduxjs/toolkit';
import CategoriesSlice from './slices/Categories.slice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/Root.saga';
import ResultsQuieseSlice from './slices/ResultsQuiz.slice';
import StatsSlice from './slices/Stats.slice';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    categories: CategoriesSlice,
    resultsQuiz: ResultsQuieseSlice,
    stats: StatsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);