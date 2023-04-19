import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Channel from "./components/channel/Channel";
import Header from "./components/header/Header";
import VideoList from "./components/videoList/VideoList";
import Videoplayer from "./components/videoplayer/Videoplayer";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element=<VideoList /> />
            <Route path="/register" element=<Auth /> />
            <Route path="/channel/details/:id" element={<Channel />} />
            {/* <Route path="/videos/:id" element={<Channel />} /> */}
            <Route path="/video/play/:videoid" element={<Videoplayer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
