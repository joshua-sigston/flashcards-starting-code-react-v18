import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizzes: localStorage.getItem('quizzes')
    ? JSON.parse(localStorage.getItem('quizzes'))
    : [],
};

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const existingQuiz = state.quizzes.find(
        (quiz) => quiz.id === action.payload.id,
      );

      if (!existingQuiz) {
        state.quizzes.push(action.payload);
      }

      localStorage.setItem('quizzes', JSON.stringify(state.quizzes));
    },
  },
});

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
