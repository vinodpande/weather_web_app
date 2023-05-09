import React from "react";
import ListItem from "../component/listItem/ListItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import NotFound from "../component/notfound/NotFound";
import { Col, Row } from "react-bootstrap";

type Props = {};

export default function RecentSearch({}: Props) {
  const weathers = useSelector((state: RootState) =>
    state.currentWeather.weathers.filter((weather) => {
      if (weather.is_recent) return weather;
    })
  );
  console.log(weathers);

  return (
    <>
      {weathers.length > 0 ? (
        <>
          <Row>
            <Col> You recently Search for</Col>
            <Col> Clear all</Col>
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
