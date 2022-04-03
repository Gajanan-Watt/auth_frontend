import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Register = () => {
  const [text, setText] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
    axios
      .post("http://localhost:3456/register", text)
      .then((res) => {
        sessionStorage.setItem("user", JSON.stringify(res.data));
        // setData(res.data);
      })
      .catch((e) => console.log(e));

    navigate("/login");
    // let data = sessionStorage.getItem("data");
    // console.log("storage", storage);
    // console.log();
    // setCheck((prev) => !prev);
  };
  return (
    <>
      <h1 className="head">FULLSTACK ASSESMENT </h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "25ch", height: "7ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          onChange={handleChange}
        />
        <br />
        <Button onClick={handleSubmit} className="btn" variant="contained">
          Register
        </Button>
      </Box>

      <br />
      {/* <Table setPat={setPat} setDel={setDel} info={info} setInfo={setInfo} /> */}
    </>
  );
};
