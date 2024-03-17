import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
const List = ({ name, icon }) => {
  const navlink = useRef();
  useEffect(() => {}, [name]);
  return (
    <div ref={navlink} className="list-item">
      <p>hello</p>
      <p
        onClick={(e) => {
          console.log(e.target);
          e.target.parentNode.classList.add("active");
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default List;
