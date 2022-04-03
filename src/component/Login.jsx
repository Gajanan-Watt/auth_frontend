import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { Table } from "./Table";
// import "./form.css";

export const Login = () => {
  const [text, setText] = useState({});
  const [check, setCheck] = useState(false);
  const [del, setDel] = useState(false);
  const [pat, setPat] = useState(false);
  const [info, setInfo] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setText({ ...text, [name]: value });
    // console.log(text);
  };

  let navigate = useNavigate();

  //   const getData = () => {
  // axios
  //   .get("http://localhost:3456/api/issue/")
  //   .then((res) => setInfo(res.data))
  //   .catch((e) => console.log(e));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = JSON.parse(sessionStorage.getItem("user"));
    let tokenn = userData.token;
    console.log(tokenn);
    axios
      .post("http://localhost:3456/login", text, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenn}`,
        },
      })
      .then((res) => {
        // console.log(res);
        sessionStorage.setItem("LoggedUser", JSON.stringify(res.data));
      })
      .catch((e) => console.log(e));

    navigate("/profile");
    // let Log = JSON.parse(localStorage.getItem("LoggedUser"));
    // console.log(Log);
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
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
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
