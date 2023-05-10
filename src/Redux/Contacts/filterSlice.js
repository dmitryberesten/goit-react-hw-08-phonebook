import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'Redux/Authorization/operations';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filtration: (state, action) => {
      return (state = action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, state => {
      return (state = '');
    });
  },
});

export const { filtration } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
