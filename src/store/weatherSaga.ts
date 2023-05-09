import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchWeather } from "./services/APIService";
import { FETCH_DATA_SAGA, sagaActions } from "./sagaActions";
import { currentWeather } from "./WeatherSlice";
// import * as actionCreators from "../actionCreators/lyricsActionCreators";
// import * as actionTypes from "../actionTypes/lyricsActionTypes";

function* onLoadWeather({ city, type }: sagaActions) {
  try {
    console.log("Weather type", type);
    console.log("Weather city", city);
    // yield put(actionCreators.getLyricsRequest());
    const { data } = yield call(fetchWeather, city);
    console.log("Weather data", data);
    yield put(currentWeather(data));
  } catch (error) {
    // yield put(actionCreators.getLyricsFailure(error.response.data.error));
  }
}

function* watchOnLoadWeather() {
  yield takeEvery(FETCH_DATA_SAGA, onLoadWeather);
}

export default function* weatherSaga() {
  yield all([fork(watchOnLoadWeather)]);
}
