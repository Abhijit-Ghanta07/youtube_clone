import { useUserStore } from "../../context/Context";
import { useParams } from "react-router-dom";
import "./channel.css";
import ChannelShow from "./ChannelShow";
import { useFetchData } from "../../api/Api";
const Channel = () => {
  const { channelPlaylist, videoId } = useUserStore();
  const { id } = useParams();
  const { data: channelDetails } = useFetchData(`channel/details/?id=${id}`);
  const { data: channelVideos } = useFetchData(`channel/videos/?id=${id}`);
  // try {
  //   const memoCall = useMemo(() => {
  //     if (channelDetails.length === 0 || id !== videoId) {
  //       getChannel(`channel/details/?id=${id}`);
  //       getChannelVideos(`channel/videos/?id=${id}`);
  //     }
  //   }, [id]);
  //   const playlistMemo = useMemo(() => {
  //     getChannelPlaylist(`channel/playlists/?id=${id}`);
  //   }, [id]);
  // } catch (err) {
  //   console.log(err);
  // }
  // function setState(params) {
  //   setDetails(channelDetails);
  //   setVideos(channelVideos);
  //   setplaylist(channelPlaylist);
  // }

  // useEffect(() => {
  //   setState();
  //   getVideoId(id);
  // }, [channelDetails, channelVideos, id]);
  return (
    <>
      <div className="channel-container">
        {Details?.data && (
          <ChannelShow
            details={channelDetails}
            videos={channelVideos}
            playlist={channelPlaylist}
          />
        )}
      </div>
    </>
  );
};

export default Channel;
