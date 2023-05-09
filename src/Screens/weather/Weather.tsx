import { useState, useEffect } from "react";
import styles from "./weather.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextLabel from "../../component/Text/TextLabel";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { ReactComponent as IconSunny } from "../../assets/images/icon_mostly_sunny.svg";
import { ReactComponent as IconTemp } from "../../assets/images/icon_temperature_info.svg";
import { ReactComponent as IconPreciitation } from "../../assets/images/icon_precipitation_info.svg";
import { ReactComponent as IconHumidity } from "../../assets/images/icon_humidity_info.svg";
import { ReactComponent as IconWind } from "../../assets/images/icon_wind_info.svg";
import { ReactComponent as IconVisibility } from "../../assets/images/icon_visibility_info.svg";

import { useSelector, useDispatch } from "react-redux";
import { addToFavourite, currentWeather } from "../../store/WeatherSlice";
import { RootState } from "../../store/Store";
import { FETCH_DATA_SAGA, sagaActions } from "../../store/sagaActions";
import { Utils } from "../../Utils/Utils";
import GroupButton from "../../component/groupbutton/GroupButton";

type Props = {};

const Weather = ({}: Props) => {
  const [temp, setTemp] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [tempMax, setTempMax] = useState(0);

  const dispatch = useDispatch();
  const currentWeather = useSelector(
    (state: RootState) => state.currentWeather.currentWeather
  );
  useEffect(() => {
    dispatch({ type: FETCH_DATA_SAGA, city: "Jalna" });
  }, []);

  useEffect(() => {
    onCalculateTemp(Utils.Celsius);

    return () => {};
  }, [currentWeather]);

  const onCalculateTemp = (mode: string) => {
    console.log("onCalculateTemp");
    if (mode === Utils.Celsius) {
      if (currentWeather) {
        setTemp(Math.round(Utils.getCelsius(currentWeather.temp)));
        setTempMin(Math.round(Utils.getCelsius(currentWeather.temp_min)));
        setTempMax(Math.round(Utils.getCelsius(currentWeather.temp_max)));
      }
    } else {
      if (currentWeather) {
        setTemp(Math.round(Utils.getFahrenheit(currentWeather.temp)));
        setTempMin(Math.round(Utils.getFahrenheit(currentWeather.temp_min)));
        setTempMax(Math.round(Utils.getFahrenheit(currentWeather.temp_max)));
      }
    }
  };

  console.log("currentWeather", currentWeather);
  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <Row
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextLabel
          label={currentWeather.city + ", " + currentWeather.country}
          className="city_name"
        />
        <Row style={{ paddingLeft: 0 }}>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onClick={() => {
              dispatch(addToFavourite(currentWeather));
            }}
          >
            {currentWeather.is_favourite ? (
              <MdFavorite color={"#FEF539"} />
            ) : (
              <MdFavoriteBorder color={"#FFF"} />
            )}
            <TextLabel label="Add to favourite" className="favourite_weather" />
          </Col>
        </Row>
      </Row>

      <Row style={{ flex: 3 }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconSunny name={currentWeather.icon} />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <TextLabel label={temp.toString()} className="temp" />
            <GroupButton onCalculateTemp={onCalculateTemp} />
          </div>
          <TextLabel
            label={currentWeather.description}
            className="description"
          />
        </Col>
      </Row>

      <Row style={{ flex: 1 }}>
        <Col>
          <div className={styles.flexRow}>
            <IconTemp
              color={"#FFF"}
              className={styles.marginRight}
              width={16}
              height={32}
            />
            <div>
              <TextLabel label="Min-Max" className="description" />
              <TextLabel
                label={tempMin.toString() + "-" + tempMax}
                className="description"
              />
            </div>
          </div>
        </Col>

        <Col>
          <div className={styles.flexRow}>
            <IconPreciitation
              color={"#FFF"}
              className={styles.marginRight}
              width={30}
              height={29}
            />
            <div>
              <TextLabel label="Precipitation" className="description" />
              <TextLabel
                label={currentWeather.feels_like.toString()}
                className="description"
              />
            </div>
          </div>
        </Col>

        <Col>
          <div className={styles.flexRow}>
            <IconHumidity
              color={"#FFF"}
              className={styles.marginRight}
              width={19}
              height={25}
            />
            <div>
              <TextLabel label="Huminity" className="description" />
              <TextLabel
                label={currentWeather.humidity + "%"}
                className="description"
              />
            </div>
          </div>
        </Col>

        <Col>
          <div className={styles.flexRow}>
            <IconWind
              color={"#FFF"}
              className={styles.marginRight}
              width={32}
              height={22}
            />
            <div>
              <TextLabel label="Wind" className="description" />
              <TextLabel
                label={currentWeather.speed.toString()}
                className="description"
              />
            </div>
          </div>
        </Col>

        <Col>
          <div className={styles.flexRow}>
            <IconVisibility
              className={styles.marginRight}
              width={32}
              height={16}
            />
            <div>
              <TextLabel label="Visibility" className="description" />
              <TextLabel
                label={currentWeather.visibility.toString()}
                className="description"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Weather;
