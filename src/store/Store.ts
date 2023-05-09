import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./WeatherSlice";
import createSagaMiddleware from "redux-saga";
import weathersaga from "./weatherSaga";

const sagaMiddleware = createSagaMiddleware();
export const Store = configureStore({
  reducer: { currentWeather: WeatherReducer },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(weathersaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
