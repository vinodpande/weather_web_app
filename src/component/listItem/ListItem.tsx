import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextLabel from "../Text/TextLabel";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { WeatherState, addToFavourite } from "../../store/WeatherSlice";
import { Utils } from "../../Utils/Utils";
import { useDispatch } from "react-redux";
import style from "./listitem.module.css";
import SuperScriptText from "../superscripttext/SuperScriptText";

type Props = {
  data: WeatherState;
};

const ListItem: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row className={style.listitemrow}>
      <Col xs={4} md={3}>
        <TextLabel
          label={data.city + ", " + data.country}
          className={
            data.is_favourite ? "list-city_name-fav" : "list-city_name"
          }
        />
      </Col>

      <Col className={style.listitemcol} xs={6} md={6}>
        <img
          className={style.listitemimg}
          src={`https://openweathermap.org/img/wn/${data?.icon}.png`}
          alt="icon"
        />
        <TextLabel
          label={Utils.getCelsius(data.temp).toString()}
          className="temp-list"
        />
        <SuperScriptText text="C" />
        <TextLabel label={data.description} className="list-description" />
      </Col>

      <Col
        className={style.listitemcolend}
        xs={2}
        md={1}
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
