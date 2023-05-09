import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextLabel from "../Text/TextLabel";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { WeatherState, addToFavourite } from "../../store/WeatherSlice";
import { Utils } from "../../Utils/Utils";
import { useDispatch } from "react-redux";

type Props = {
  data: WeatherState;
};

const ListItem: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Col xs={4} md={3}>
        <TextLabel
          label={data.city + ", " + data.country}
          className={
            data.is_favourite ? "list-city_name-fav" : "list-city_name"
          }
        />
      </Col>

      <Col
        style={{
          justifyContent: "flex-start",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        xs={4}
        md={3}
      >
        <img
          style={{ width: 36, height: 38 }}
          src={`https://openweathermap.org/img/wn/${data?.icon}.png`}
          alt="icon"
        />
        <TextLabel
          label={Utils.getCelsius(data.temp).toString()}
          className="temp-list"
        />
        <TextLabel label={data.description} className="list-description" />
      </Col>

      <Col
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        xs={4}
        md={2}
        onClick={() => dispatch(addToFavourite(data))}
      >
        {data.is_favourite ? (
          <MdFavorite color={"#FFD639"} />
        ) : (
          <MdFavoriteBorder color={"#FFF"} />
        )}
      </Col>
    </Row>
  );
};

export default ListItem;
