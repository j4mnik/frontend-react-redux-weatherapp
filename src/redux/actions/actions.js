import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_key = ""

export const fetchWeather = createAsyncThunk(
  "weather/fetch",
  async (payload) => {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=${api_key}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  reducers: {
  },
 
  extraReducers: builder => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.isLoading = false;
      state.error = undefined;
    });

    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.weather = undefined;
      state.isLoading = false;
      state.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;
