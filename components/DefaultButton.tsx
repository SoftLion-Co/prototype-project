import React, { ReactNode } from "react";
import s from "./DefaultButton.module.scss";
import classNames from "classnames";

interface ButtonProps {
  icon?: ReactNode;
  content?: string;
  style: "red-white" | "white-red" | "green" | "transparent" | "gray";
  onClick?: () => void;
}

const DefaultButton: React.FC<ButtonProps> = ({
  icon,
  content,
  style,
  onClick,
}) => {
  let buttonColor = "";
  if (style === "red-white") {
    buttonColor = s.red_white;
  } else if (style === "white-red") {
    buttonColor = s.white_red;
  } else if (style === "green") {
    buttonColor = s.green;
  } else if (style === "gray") {
    buttonColor = s.gray;
  }
  return (
    <button className={classNames(s.button, buttonColor)} onClick={onClick}>
      {icon}
      {content}
    </button>
  );
};

export default DefaultButton;
