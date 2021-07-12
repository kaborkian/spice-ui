import React from "react";
import "./Button.scss";

interface Props {
  text: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <>
      <button>{props.text}</button>
    </>
  );
};

export default Button;
