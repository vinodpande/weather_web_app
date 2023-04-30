import React from "react";

import "./container.css";
type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <div className="container_">{children}</div>;
};

export default Container;
