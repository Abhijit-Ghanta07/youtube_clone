import React from "react";
import { Spinner } from "react-bootstrap";
// styles
import style from "./loader.module.scss";

const Loader = () => {
  return (
    <>
      <div className={style.loader__wrapper}>
        <Spinner animation="border" role="status"></Spinner>
        <h3 className="text-light">Loading...</h3>
      </div>
    </>
  );
};

export default Loader;
