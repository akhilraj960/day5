import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddUser = (props) => {
  var [user, setUser] = useState(props.data);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formSubmit = () => {
    if (props.method === "post") {
      axios.post("http://localhost:8080/api/user", user).then((res) => {
        if (res) {
          toast.error("Success", toastOptions);
        }
      });
    }else if(props.method==='put'){
      axios.put(`http://localhost:8080/api/user/${user._id}`, user).then((res) => {
        if (res) {
          toast.error("Updated Successfully", toastOptions);
          window.location.reload(false)
        }
      });
    }
  };

  return (
    <>
      <br />
      <br />
      <TextField
        label="name"
        name="name"
        value={user.name}
        variant="outlined"
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />
      <TextField
        label="age"
        name="age"
        type="number"
        variant="outlined"
        value={user.age}
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />
      <TextField
        label="grad"
        name="course"
        value={user.course}
        variant="outlined"
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />

      <Button onClick={formSubmit}>Submit</Button>
      <ToastContainer />
    </>
  );
};

export default AddUser;
