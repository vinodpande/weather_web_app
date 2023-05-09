import { useState } from "react";
import "./autocomplete.css";
import { ReactComponent as IconSearch } from "../../assets/images/icon_search_white.svg";
import { Utils } from "../../Utils/Utils";
import { FETCH_DATA_SAGA } from "../../store/sagaActions";
import { useDispatch } from "react-redux";

type Props = {};

const Autocompelete = ({}: Props) => {
  const dispatch = useDispatch();
  const [showCities, setShowCities] = useState(false);
  const [filteredCities, setfilteredCities] = useState<any[]>([]);
  const [inputValue, setInputeValue] = useState("");

  const onClick = (value: string) => {
    console.log(value);
    setInputeValue(value);
    setShowCities(false);
    dispatch({ type: FETCH_DATA_SAGA, city: value });
  };
  const onTextChange = (e: any) => {
    setShowCities(true);
    setInputeValue(e.target.value);
    let data = Utils.cities.filter((el) =>
      el.city.toLowerCase().startsWith(e.target.value.toLowerCase())
    );

    setfilteredCities(data);
  };

  return (
    <div style={{ position: "absolute" }}>
      <div className="rectangle">
        <input
          className="inputebox"
          placeholder="Search city"
          type="text"
          value={inputValue}
          onChange={(e) => onTextChange(e)}
        />
        <IconSearch />
      </div>
      {showCities && (
        <ul className="suggestions">
          {filteredCities.map(({ city }, index) => {
            return (
              <li key={city} onClick={() => onClick(city)}>
                {city}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Autocompelete;
