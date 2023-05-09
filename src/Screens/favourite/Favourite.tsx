import { NOTFOUND } from "dns";
import React from "react";
import NotFound from "../../component/notfound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import ListItem from "../../component/listItem/ListItem";
import { Col, Row } from "react-bootstrap";
import { removeFavourities } from "../../store/WeatherSlice";
import "./favourite.css";

type Props = {};

export default function Favourite({}: Props) {
  const dispatch = useDispatch();
  const weathers = useSelector((state: RootState) =>
    state.currentWeather.weathers.filter((weather) => {
      if (weather.is_favourite) return weather;
    })
  );
  console.log(weathers);

  return (
    <>
      {weathers.length > 0 ? (
        <>
          <Row className="favourite_row">
            <Col xs={10} md={10} className="favourite_first_text">
              {`${weathers.length} City added as favourite`}
            </Col>

            <Col
              xs={2}
              md={2}
              className="favourite_sec_text"
              onClick={() => dispatch(removeFavourities())}
            >
              Clear all
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
