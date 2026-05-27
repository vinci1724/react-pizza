import { createSlice } from '@reduxjs/toolkit';

import { sortList } from '../../constants';

const initialState = {
  categoryId: 0,
  sort: sortList[0],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
