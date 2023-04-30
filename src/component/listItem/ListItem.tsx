import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextLabel from "../Text/TextLabel";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

type Props = {};

export default function ListItem({}: Props) {
  return (
    <Row
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Col>
        <TextLabel label="Udupi,Karnataka" className="city_name" />
      </Col>

      <Col
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextLabel label="31" className="temp" />
        <TextLabel label="Mostly Sunny" className="description" />
      </Col>

      <Col
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <MdFavoriteBorder color={"#FFF"} />
        <MdFavorite color={"#FFD639"} />
      </Col>
    </Row>
  );
}
