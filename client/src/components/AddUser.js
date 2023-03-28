import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddUser = () => {
  var [user, setUser] = useState({
    age: "",
    name: "",
    course: "",
  });
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
    axios.post("http://localhost:8080/api/user", user).then((res) => {
      if (res) {
        toast.error(
          "Success",
          toastOptions
        );
      }
    });
  };

  return (
    <>
      <br />
      <br />
      <TextField
        label="name"
        name="name"
        variant="outlined"
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />
      <TextField
        label="age"
        name="age"
        variant="outlined"
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />
      <TextField
        label="grad"
        name="grad"
        variant="outlined"
        onChange={inputHandler}
      ></TextField>
      <br />
      <br />

      <Button onClick={formSubmit}>Submit</Button>
      <ToastContainer/>

    </>
  );
};

export default AddUser;
