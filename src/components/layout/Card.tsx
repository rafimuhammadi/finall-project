import React from "react";
import style from "../../components/layout/Card.module.css";
const Card = (props: any) => {
  return (
    <div className={`${style.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
