import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: localStorage.getItem('cards')
    ? JSON.parse(localStorage.getItem('cards'))
    : [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
      localStorage.setItem('cards', JSON.stringify(state.cards));
    },
  },
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
