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
      <Col xs={4} md={3}>
        <TextLabel label="Udupi, KA" className="city_name" />
      </Col>

      <Col
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        xs={4}
        md={3}
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
        xs={4}
        md={2}
      >
        <MdFavoriteBorder color={"#FFF"} />
        <MdFavorite color={"#FFD639"} />
      </Col>
    </Row>
  );
}
