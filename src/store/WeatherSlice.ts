import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WeatherState {
  main: string;
  description: string;
  temp: number;
  feels_like: number; // Precipitation
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  city: string;
  country: string;
  date: string;
  icon: string;
  speed: number;
  visibility: number;
  is_recent: boolean;
  is_favourite: boolean;
}

interface types {
  weathers: WeatherState[];
  currentWeather: WeatherState;
  isLoading: boolean;
  isError: boolean;
}
const initialState: types = {
  isError: false,
  isLoading: false,
  weathers: [],
  currentWeather: {
    main: "",
    description: "",
    temp: 0,
    feels_like: 0, // Precipitation
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    city: "",
    country: "",
    date: "",
    icon: "",
    is_recent: false,
    is_favourite: false,
    speed: 0.0,
    visibility: 0,
  },
};

export const WeatherSlice = createSlice({
  name: "weather",
  initialState,

  reducers: {
    currentWeather: (state, action: PayloadAction<any>) => {
      console.log("Slice data", action.payload);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.currentWeather.main = action.payload.weather[0].main;
      state.currentWeather.description = action.payload.weather[0].description;
      state.currentWeather.temp = action.payload.main.temp;
      state.currentWeather.feels_like = action.payload.main.feels_like; // Precipitation
      state.currentWeather.temp_min = action.payload.main.temp_min;
      state.currentWeather.temp_max = action.payload.main.temp_max;
      state.currentWeather.pressure = action.payload.main.pressure;
      state.currentWeather.humidity = action.payload.main.humidity;
      state.currentWeather.city = action.payload.name;
      state.currentWeather.country = action.payload.sys.country;
      state.currentWeather.date = action.payload.dt;
      state.currentWeather.icon = action.payload.weather[0].icon;
      state.currentWeather.is_recent = true;
      state.currentWeather.is_favourite = false;
      state.currentWeather.speed = action.payload.wind.speed;
      state.currentWeather.visibility = action.payload.visibility;
      //   state.is_favourite = action.payload.is_favourite;

      let is_city_found = false;

      state.weathers.forEach((item, index) => {
        if (item.city === state.currentWeather.city) {
          is_city_found = true;
          state.weathers[index].main = state.currentWeather.main;
          state.weathers[index].temp = state.currentWeather.temp;
          state.weathers[index].temp_min = state.currentWeather.temp_min;
          state.weathers[index].temp_max = state.currentWeather.temp_max;
          state.weathers[index].icon = state.currentWeather.icon;
          state.weathers[index].description = state.currentWeather.description;
          state.weathers[index].feels_like = state.currentWeather.feels_like;
          state.currentWeather.speed = state.currentWeather.speed;
          state.currentWeather.visibility = state.currentWeather.visibility;
          state.currentWeather.is_favourite =
            state.weathers[index].is_favourite;
        }
      });

      if (is_city_found === false) {
        state.weathers.push(state.currentWeather);
      }
    },
    addToFavourite: (state, action: PayloadAction<WeatherState>) => {
      state.weathers.forEach((item, index) => {
        if (item.city === action.payload.city) {
          state.weathers[index].is_favourite =
            !state.weathers[index].is_favourite;
        }
      });

      if (state.currentWeather.city === action.payload.city) {
        state.currentWeather.is_favourite = !state.currentWeather.is_favourite;
      }
    },

    removeFavourities: (state) => {
      const data = state.weathers
        .filter((item) => item.is_recent === true)
        .map((item) => {
          return { ...item, is_favourite: false };
        });
      state.weathers = data;
      // state.weathers.forEach((item, index) => {
      //   if (item.is_favourite === true && item.is_recent === false) {
      //     state.weathers.splice(index, 1);
      //   } else {
      //     state.weathers[index].is_favourite = false;
      //   }
      // });
    },

    removeRecentSearch: (state) => {
      const data = state.weathers
        .filter((item) => item.is_favourite === true)
        .map((item) => {
          return { ...item, is_recent: false };
        });
      console.log(data);
      state.weathers = data;
      // state.weathers.forEach((item, index) => {
      //   if (item.is_favourite === false) {
      //     state.weathers.splice(index, 1);
      //   } else {
      //     state.weathers[index].is_recent = false;
      //   }
      // });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  currentWeather,
  addToFavourite,
  removeFavourities,
  removeRecentSearch,
} = WeatherSlice.actions;

export default WeatherSlice.reducer;
