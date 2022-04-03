import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/authContext";

export const Login = () => {
  const [text, setText] = useState({});

  const { data, setData } = useContext(AuthContext);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = JSON.parse(sessionStorage.getItem("user"));
    let tokenn = userData.token;
    // console.log(tokenn);

    axios
      .post("http://localhost:3456/login", text, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenn}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
    setTimeout(() => {
      navigate("/profile");
    }, 700);
  };
  // console.log(data);

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

        <Button onClick={handleSubmit} className="btn" variant="contained">
          Login
        </Button>
      </Box>

      <br />
      {/* <Table setPat={setPat} setDel={setDel} info={info} setInfo={setInfo} /> */}
    </>
  );
};
