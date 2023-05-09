import { NOTFOUND } from "dns";
import React from "react";
import NotFound from "../component/notfound/NotFound";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import ListItem from "../component/listItem/ListItem";

type Props = {};

export default function Favourite({}: Props) {
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
