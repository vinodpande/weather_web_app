import React from "react";
import "./text_label.css";

type Props = {
  label: string;
  className:
    | "city_name"
    | "temp"
    | "description"
    | "favourite_weather"
    | "list-description"
    | "list-city_name-fav"
    | "list-city_name"
    | "temp-list";
};

const TextLabel: React.FC<Props> = ({ label = "Text", className }) => {
  return <div className={className}>{label}</div>;
};

export default TextLabel;
