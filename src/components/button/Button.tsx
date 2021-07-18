import React from "react";
import "./Button.scss";

interface Props {
  text: string;
  class_name: string;
}

const Button: React.FC<Props> = (props) => {
  const { text, class_name } = props;
  return (
    <>
      <button className={class_name}>{text}</button>
    </>
  );
};

export default Button;
