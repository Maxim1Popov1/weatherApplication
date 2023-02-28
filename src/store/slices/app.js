import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  weatherData: '',
};

export const appSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeather: (state, action) => {
        state.weatherData = action.payload
  },
}
});

export const { getWeather } = appSlice.actions;