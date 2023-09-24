import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: localStorage.getItem('topics')
    ? JSON.parse(localStorage.getItem('topics'))
    : [],
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const existingTopic = state.topics.find(
        (topic) => topic.id === action.payload.id,
      );
      if (!existingTopic) {
        state.topics.push(action.payload);
      }

      localStorage.setItem('topics', JSON.stringify(state.topics));
    },
  },
});

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
