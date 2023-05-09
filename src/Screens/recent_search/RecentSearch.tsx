import React from "react";
import ListItem from "../../component/listItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import NotFound from "../../component/notfound/NotFound";
import { Col, Row } from "react-bootstrap";
import {
  removeFavourities,
  removeRecentSearch,
} from "../../store/WeatherSlice";

import "./recentsearch.css";

type Props = {};

export default function RecentSearch({}: Props) {
  const dispatch = useDispatch();
  const weathers = useSelector((state: RootState) =>
    state.currentWeather.weathers.filter((weather) => {
      if (weather.is_recent) return weather;
    })
  );
  // console.log(weathers);

  return (
    <>
      {weathers.length > 0 ? (
        <>
          <Row className="recent_search_row">
            <Col xs={10} md={10} className="recent_search_first_text">
              You recently Search for
            </Col>

            <Col
              xs={2}
              md={2}
              className="recent_search_sec_text"
              onClick={() => dispatch(removeRecentSearch())}
            >
              Remove all
            </Col>
          </Row>

          {weathers.map((weather, index) => (
            <ListItem data={weather} key={index} />
          ))}
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}
