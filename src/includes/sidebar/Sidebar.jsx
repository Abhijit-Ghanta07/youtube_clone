import catagories from "../../constants/Constant";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { Col, Container, Row, Stack } from "react-bootstrap";
import cl from "classnames";
// styles
import style from "./sidebar.module.scss";
const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Container className={cl(style.sidebar__con, "bg-dark")}>
      <Row>
        <Col>
          <h3 className={style.logo}>
            <img src={"/images/logo.png"} alt="logo" />

            <span>
              Play<span className={style.red}>Tube</span>
            </span>
          </h3>
          <Stack gap={2} direction="vertical" className={style.flex__wrapper}>
            <Link
              to={"/"}
              className={
                pathname == "/"
                  ? style.sidebar__link__active
                  : style.sidebar__link
              }
            >
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
                  className={
                    cata.path == pathname.split("/")[2]
                      ? style.sidebar__link__active
                      : style.sidebar__link
                  }
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
