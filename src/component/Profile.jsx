import { useEffect, useState } from "react";

export const Profile = () => {
  const [logUser, setLogUser] = useState({});
  var LoggedUser;

  LoggedUser = JSON.parse(sessionStorage.getItem("LoggedUser")).user;
  useEffect(() => {
    setLogUser(LoggedUser);
    console.log(LoggedUser);
  }, []);

  return (
    <>
      <h1>Profile Summary</h1>
      <h2>Name: {logUser.name}</h2>
      <h2>Email: {logUser.email}</h2>
      <h2>Phone Number: {logUser.phoneNumber}</h2>
    </>
  );
};
