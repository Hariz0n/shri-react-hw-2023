import {createSlice} from "@reduxjs/toolkit";

type IState = {
  text: string,
  cinema?: string,
  genre?: string
}

const initialState: IState = {
  text: ''
}

export const filterSlice = createSlice({
  name: 'cartFilter',
  initialState,
  reducers: {
    changeText: (state, {payload}) => {
      state.text = payload
    },
    changeCinema: (state, {payload}) => {
      state.cinema = payload
    },
    changeGenre: (state, {payload}) => {
      state.genre = payload
    }
  }
})

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;