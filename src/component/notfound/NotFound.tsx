import "./notfound.css";
import React from "react";
type Props = {
  label?: string;
};

const NotFound: React.FC<Props> = ({ label = "Not Found" }) => {
  return (
    <div className="notfound">
      <img src={require("../../assets/images/icon_nothing.svg").default} />
      <div>{label}</div>
    </div>
  );
};

export default NotFound;
