import { Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Channel from "./components/channel/Channel";
import VideoList from "./components/videoList/VideoList";
import Videoplayer from "./components/videoplayer/Videoplayer";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
        {/* <Route path="/register" element={<Auth />} />
        <Route path="/channel/details/:id" element={<Channel />} />
         <Route path="/videos/:id" element={<Channel />} /> 
        <Route path="/video/play/:videoid" element={<Videoplayer />} /> */}
      </Routes>
    </>
  );
}

export default App;
