import { createContext, useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import Explore from "../components/sidebar/Explore";
import VideoList from "../components/videoList/VideoList";
import Channel from "../components/channel/Channel";
import "./pages.css";
import { DataContext } from "../context/Context";
// export const ThemeContext = createContext(null);
const Pages = () => {
  // const [mode, setMode] = useState("lightmode");
  // const { loading } = useContext(DataContext);

  return (
    <>
      {/* <ThemeContext.Provider value={mode}> */}
      {/* <Sidebar /> */}
      <div className="pages-container">
        {/* <Header setmode={setMode} /> */}
      </div>
      {/* </ThemeContext.Provider> */}
    </>
  );
};

export default Pages;
