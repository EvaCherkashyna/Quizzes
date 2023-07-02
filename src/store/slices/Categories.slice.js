import { createSlice } from '@reduxjs/toolkit'
const initialState =
{
  categories: [],
  pending: true,
}
  ;

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories() { },
    setCategories(state, action) {
      state.categories.push(...action.payload);
      state.pending = false;
    }
  }
});

export const {
  getCategories, setCategories
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
