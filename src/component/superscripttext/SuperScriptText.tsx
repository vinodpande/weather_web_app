import React from "react";
import TextLabel from "../Text/TextLabel";
import "./superscripttext.css";

type Props = {
  text: string;
};

const SuperScriptText: React.FC<Props> = ({ text }) => {
  return (
    <div className="super-script-containerstyle">
      <TextLabel className="super-script-o" label="o"></TextLabel>
      <TextLabel className="super-script-text" label={text} />
    </div>
  );
};

export default SuperScriptText;
