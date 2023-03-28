import React from "react";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Modal, Backdrop, Fade, Box } from "@mui/material";
import axios from 'axios'
import './Signup.css'
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

const Signup = () => {

        const navigate = useNavigate()
    
        const [ user, setUser] = useState({
            FirstName: "",
            LastName: "",
            Email:"",
            Password:"",
        })
    
        const handleChange = e => {
            const { name, value } = e.target
            setUser({
                ...user,
                [name]: value
            })
        }

    const register = () => {
        const { FirstName, LastName, Email, Password} = user
        if( FirstName && LastName && Email && Password ){
            axios.post("http://localhost:5000/signup", user)
            .then( res => {
                alert(res.data.message)
                // history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen1(true);
  const handleClose = () => setOpen1(false)
  return (
    <>
      <button onClick={handleOpen}>
        <LoginIcon />
      </button>
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
          <div className="register">
            {/* {console.log("User", user)} */}
            <h1>Register</h1>
            <input type="text" name="FirstName" value={user.FirstName} placeholder="First Name" onChange={ handleChange }></input>
            <input type="text" name="LastName" value={user.LastName} placeholder="Last Name" onChange={ handleChange }></input>
            <input type="email" name="Email" value={user.Email} placeholder="Email" onChange={ handleChange }></input>
            <input type="password" name="Password" value={user.Password} placeholder="Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/signin")}>Login</div>
        </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Signup;
