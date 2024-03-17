import  { useContext, useState } from "react";
import List from "./List";
import "./sidebar.css";
import catagories from "../../constants/Constant";
import { SiAirplayvideo } from "react-icons/si";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
const Sidebar = () => {
  // const { setCatagories } = useContext(DataContext);
  const [inputData, setInputData] = useState("");

  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="logo">
          <SiAirplayvideo />
          <Link to="/">videoPlayer</Link>
        </div>
        <div className="search">
          <input
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                e.preventDefault();
                setInputData(e.target.value);
              } else {
                console.log("not enter key");
              }
            }}
          />
        </div>
        <div className="list">
          {catagories.map((item, index) => (
            <List name={item.name} icon={item.icon} key={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
