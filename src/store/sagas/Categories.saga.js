import { QuizzesService } from "../../assets/services/Quizzes.service";
import {
  call,
  put,
  all,
  select,
  fork,
  takeLatest,
} from "redux-saga/effects";

import { setCategories } from "../slices/Categories.slice";
import { setQuiz } from "../slices/Stats.slice";

function* workerCategories() {
  try {
    const dataCategories = yield call(QuizzesService.getCategories);
    const data = dataCategories.data.trivia_categories.slice(0, 10)
    const isCategoriesConsist = yield select(state => state.categories.categories)
   
    if (!isCategoriesConsist.length) {
      for (let i = 0; i < 10; i++) {
        const dataQuizzes = yield call(QuizzesService.getQuizzesByCategory, data[i].id);
        const name = data[i].name.toLowerCase().split(" ");
        const photo = yield call(QuizzesService.getPhotoByQuery, name[name.length - 1]);
        data[i] = { ...data[i], quizzes: dataQuizzes.data.results, countOfQuizzes: dataQuizzes.data.results.length, imgUrl: photo.data.results[i].urls.small }
      }
      yield put(setCategories(data));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* watchCategories() {
  yield all([takeLatest("categories/getCategories", workerCategories)]);
}
function* workerQuizzes() {
  try {
    const data = yield select(state => state.resultsQuiz);
    const name = yield select(state => state.stats.name);
    
    yield put(setQuiz({
      quizzes: {
        name,
        time: data.timeInSec,
        correct: data.correctAnswers,
        totalQuizzes: data.totalQuizzes,
      },
      correct: data.correctAnswers,
      incorrect: data.totalQuizzes - data.correctAnswers,
      time: data.timeInSec
    }));

  } catch (error) {
    console.log(error);
  }
}

export function* watchQuizzes() {
  yield all([takeLatest("stats/setResultQuiz", workerQuizzes)]);
}

export function* categoriesSaga() {
  yield all([
    fork(watchCategories),
    fork(watchQuizzes),
  ]);
}