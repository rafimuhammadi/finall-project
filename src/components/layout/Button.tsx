import React from "react";
import style from "../../assets/css/Button.module.css";
const Button = (props: any) => {
  return (
    <button onClick={props.onClick} className={style.button}>
      {props.children}
    </button>
  );
};
export default Button;
