import React, { useState } from "react";
import { Modal, Backdrop, Fade, Box } from "@mui/material";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#262c36",
  borderRadius: "1rem",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "35%",
};

const Login = () => {
  const /* A function that is used to navigate to a different route. */
  navigate = useNavigate()
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:5000/signin", user).then((res) => {
      alert(res.data.message);
      // setLoginUser(res.data.user)
      alert("Login Successfull");
      navigate("/")
    });
  };
  const [open1, setOpen1] = React.useState(true);
  const handleClose = () => setOpen1(false);
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open1}>
          <Box sx={style}>
            <div className="login">
              <h1>Login</h1>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your Email"
              ></input>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your Password"
              ></input>
              <div className="button" onClick={login}>
                Login
              </div>
              <div>or</div>
              <div className="button" onClick={() => navigate("/Signup")}>Register</div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Login;
