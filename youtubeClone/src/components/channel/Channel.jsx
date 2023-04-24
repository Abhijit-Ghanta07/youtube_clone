import React, { useEffect, useMemo, useState } from "react";
import { useStore } from "../../context/zustand";
import { useParams } from "react-router-dom";
import "./channel.css";
import ChannelShow from "./ChannelShow";
const Channel = () => {
  const { getChannel, getChannelVideos, getChannelPlaylist, getVideoId } =
    useStore();
  const { channelDetails, channelVideos, channelPlaylist, videoId } =
    useStore();
  const [Details, setDetails] = useState(null);
  const [Videos, setVideos] = useState(null);
  const [playList, setplaylist] = useState(null);
  const { id } = useParams();
  try {
    const memoCall = useMemo(() => {
      if (channelDetails.length === 0 || id !== videoId) {
        getChannel(`channel/details/?id=${id}`);
        getChannelVideos(`channel/videos/?id=${id}`);
      }
    }, [id]);
    // const playlistMemo = useMemo(() => {
    //   getChannelPlaylist(`channel/playlists/?id=${id}`);
    // }, [id]);
  } catch (err) {
    console.log(err);
  }
  function setState(params) {
    setDetails(channelDetails);
    setVideos(channelVideos);
    setplaylist(channelPlaylist);
  }

  useEffect(() => {
    setState();
    getVideoId(id);
  }, [channelDetails, channelVideos, id]);
  return (
    <>
      <div className="channel-container">
        {Details?.data && (
          <ChannelShow details={Details} videos={Videos} playlist={playList} />
        )}
      </div>
    </>
  );
};

export default Channel;
