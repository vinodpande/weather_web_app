import { NOTFOUND } from "dns";
import React from "react";
import NotFound from "../component/notfound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store";
import ListItem from "../component/listItem/ListItem";
import { Col, Row } from "react-bootstrap";
import { removeFavourities } from "../store/WeatherSlice";

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
          <Row
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Col
              xs={10}
              md={10}
              style={{
                color: "#FFF",
                fontSize: 13,
              }}
            >
              {`${weathers.length} City added as favourite`}
            </Col>

            <Col
              xs={2}
              md={2}
              style={{
                color: "#FFF",
                fontSize: 13,
                display: "flex",
                justifyContent: "flex-end",
              }}
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
