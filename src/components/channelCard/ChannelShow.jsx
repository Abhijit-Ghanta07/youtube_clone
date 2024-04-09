import { useNavigate, Link } from "react-router-dom";
import "./channel.css";
import { useEffect, useState } from "react";
const ChannelShow = ({ details, videos, playlist }) => {
  const navigate = useNavigate();
  const [artist, setArtist] = useState(null);
  const [artistVideos, setArtistVideos] = useState(null);
  const [artistName, setartistName] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    setArtist(details.data);
    setArtistVideos(videos.data);
  }, [details, videos]);
  useEffect(() => {
    setartistName(artist?.title);
  }, [artist]);
  return (
    <>
      <div className="channel-show">
        {/* <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/");
          }}
        >
          back
        </button> */}
        <div className="banner">
          <div className="slide">
            <img src={artist?.banner.desktop[0].url} alt="" />
          </div>
        </div>
        <div className="artist-info">
          <img src={artist?.avatar[0]?.url} alt="avatar" />
          <div className="info-text">
            <h2 className="name">{artist?.title}</h2>
            <pre>
              {artist?.username} {artist?.stats?.subscribersText}{" "}
              {artist?.stats?.videosText}
            </pre>
          </div>
          <div className="links">
            {artist?.links.map((link) => {
              return (
                <Link to={link?.targetUrl} target="_blank">
                  <img src={link.icon} alt="" />
                  <p>{link?.title}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="channel-videos">
        {artistVideos?.contents?.map((item, index) => {
          return (
            <>
              <div className="channel-video" key={index}>
                <Link to={`/video/play/${item?.video?.videoId}`}>
                  <img src={item.video?.thumbnails[0]?.url} alt="thumb" />
                </Link>

                <h2>{item.video?.title}</h2>
                <h3>{artistName}</h3>
                <pre>
                  {item?.video?.stats?.views}views.
                  {item?.video?.publishedTimeText}
                </pre>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ChannelShow;
