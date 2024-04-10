import React from "react";
import { createPortal } from "react-dom";
import { Spinner } from "react-bootstrap";

import style from "./style.module.scss";
const index = ({ status }) => {
  return (
    <>
      {status
        ? createPortal(
            <>
              <div className={style.spinner__wrapper}>
                <Spinner
                  animation="border"
                  role="status"
                  className={style.spinner}
                  variant="danger"
                />
              </div>
            </>,
            document.querySelector("#loader")
          )
        : null}
    </>
  );
};

export default index;
