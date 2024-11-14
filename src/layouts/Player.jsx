import React, { Suspense } from "react";
import ReactPlayer from "react-player";
import { FaCirclePlay } from "react-icons/fa6";
// styles
import style from "./style.module.scss";
import { Loader } from "../components";
const Player = ({ videoId = "" }) => {
  let url = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <>
      <div className={style.player}>
        <Suspense fallback={<Loader />}>
          <ReactPlayer
            url={url}
            controls={true}
            playing={true}
            muted={false}
            light={true}
            playIcon={<FaCirclePlay color="red" fontSize="2.5rem" />}
            pip={true}
          />
        </Suspense>
      </div>
    </>
  );
};

export default Player;
