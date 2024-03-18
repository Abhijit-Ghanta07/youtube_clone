import { useState } from "react";
import "./auth.css";
import { useUserStore } from "../../context/Context";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { getUserInfo } = useUserStore();
  const [user, setUser] = useState({
    name: "",
    password: "",
    cpassword: "",
  });
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    getUserInfo(user);
    setUser({ name: "", password: "", cpassword: "" });
    navigate("/");
  }
  return (
    <Container className="auth-container">
      <Row className="auth-wrapper">
        <Col>
          <Card>
            <form onSubmit={handleSubmit}>
              <FormControl
                type="text"
                placeholder="enter your name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
              <FormControl
                type="text"
                name="password"
                placeholder="enter your password"
                value={user.password}
                onChange={handleChange}
              />
              <FormControl
                type="text"
                name="cpassword"
                placeholder="re-enter your password"
                value={user.cpassword}
                onChange={handleChange}
              />
              <Button onClick={handleSubmit}>Submit</Button>
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
