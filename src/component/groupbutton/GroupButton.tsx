import React, { useState } from "react";
import { Utils } from "../../Utils/Utils";
import TextLabel from "../Text/TextLabel";
import "./groupbutton.css";

type Props = {
  onCalculateTemp: Function;
};

const GroupButton: React.FC<Props> = ({ onCalculateTemp }) => {
  const [selectedButton, setSelectedButton] = useState(Utils.Celsius);

  const onClickedButton = (button: string) => {
    setSelectedButton(button);
    onCalculateTemp(button);
  };

  return (
    <div className="container-button">
      <div
        className={
          selectedButton === Utils.Celsius ? "buttonHighLight" : "button"
        }
        onClick={() => onClickedButton(Utils.Celsius)}
      >
        <div className={selectedButton === Utils.Celsius ? "c-o-h" : "c-o"}>
          o
        </div>
        <div
          className={
            selectedButton === Utils.Celsius ? "textHighLight" : "text"
          }
        >
          C
        </div>
      </div>
      <div
        className={
          selectedButton === Utils.Fahrenheit ? "buttonHighLight" : "button"
        }
        onClick={() => onClickedButton(Utils.Fahrenheit)}
      >
        <div className={selectedButton === Utils.Fahrenheit ? "c-o-h" : "c-o"}>
          o
        </div>
        <div
          className={
            selectedButton === Utils.Fahrenheit ? "textHighLight" : "text"
          }
        >
          F
        </div>
      </div>
    </div>
  );
};

export default GroupButton;
