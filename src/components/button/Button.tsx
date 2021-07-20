import React from "react";
import "./Button.scss";

interface Props {
  children?: any;
  class_name?: string;
}

const Button: React.FC<Props> = (props) => {
  const { children, class_name } = props;
  return (
    <>
      <button className={class_name}>{children}</button>
    </>
  );
};

export default Button;
