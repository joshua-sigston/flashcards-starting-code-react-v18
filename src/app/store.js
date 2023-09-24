import { configureStore } from '@reduxjs/toolkit';
// import reducers
import topicsSlice from './slices/topicsSlice';
import quizzesSlice from './slices/quizzesSlice';
import cardsSlice from './slices/cardSlice';

export default configureStore({
  reducer: {
    topics: topicsSlice,
    quizzes: quizzesSlice,
    cards: cardsSlice,
  },
});
