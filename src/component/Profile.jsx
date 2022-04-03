import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";

export const Profile = () => {
  const { data } = useContext(AuthContext);
  const [LoggedUser, setLoggedUser] = useState([]);
  const [flag, setFlag] = useState(false);

  // console.log("data", data);

  useEffect(() => {
    setLoggedUser(data);
  }, [data]);
  // console.log("LoggedUser", LoggedUser);

  setTimeout(() => {
    setFlag(true);
  }, 2000);
  return (
    <>
      {flag === false ? (
        <h1>...Loading</h1>
      ) : (
        <div>
          <h1>Profile Summary</h1>
          <h2>Name: {LoggedUser.user.name}</h2>
          <h2>Email: {LoggedUser.user.email}</h2>
          <h2>Phone Number: {LoggedUser.user.phoneNumber}</h2>
        </div>
      )}
    </>
  );
};
