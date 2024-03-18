import React from "react";
import { createPortal } from "react-dom";
import { useLoaderStore } from "../context/Context";
// styles
import style from "./loader.module.scss";
const Loader = () => {
  const loaderStatus = useLoaderStore((store) => store.loaderStatus);
  return (
    <>
      {loaderStatus &&
        createPortal(
          <div className={style.loader__wrapper}>
            <Spinner animation="border" role="status"></Spinner>
          </div>,
          document.getElementById("loader")
        )}
    </>
  );
};

export default Loader;
