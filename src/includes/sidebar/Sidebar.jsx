import catagories from "../../constants/Constant";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { Col, Container, Row, Stack } from "react-bootstrap";
// styles
import style from "./sidebar.module.scss";
const Sidebar = () => {
  return (
    <Container className={style.sidebar__con}>
      <Row>
        <Col>
          <h3 className={style.logo}>logo</h3>
          <Stack gap={2} direction="vertical" className={style.flex__wrapper}>
            <Link to={"/"} className={style.sidebar__link}>
              <span>
                <AiFillHome />
              </span>
              Home
            </Link>
            {catagories.map((cata) => {
              return (
                <Link
                  to={`/category/${cata.path}`}
                  key={cata.id}
                  className={style.sidebar__link}
                >
                  <span>{cata.icon}</span>
                  {cata.title}
                </Link>
              );
            })}
          </Stack>
          <p className={style.right}>&copy;all rights reserved Abhijit Dev</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;

{
  /* <div className="sidebar-container">
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
</div> */
}
