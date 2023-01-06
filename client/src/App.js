import "./styles/header.css";
import "./styles/headerboard.css";
import "./styles/postform.css";
import "./styles/redditstory.css";
import "./styles/headerbuttons.css";

import Header from "./components/Header";
import Headerboard from "./components/Headerboard";
import Postform from "./components/Postform";
import Redditmain from "./components/Redditmain";
import Authmodal from "./components/Authmodal";
import UserContext from "./context/UserContext";
import AuthModalContext from "./context/AuthModalContext";
import { AuthModalProvider } from "./context/AuthModalContext";
import { ModalProvider } from "./context/ModalContext";

import axios from "axios";

import { useState, useEffect, useContext } from "react";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("http://localhost:4000/user", {
        withCredentials: true,
      });
      // .then((response) => setUser(response.data))
      setUser(response.data);
    };
    getUser();
  }, []);

  const logout = async () => {
    await axios.post("http://localhost:4000/logout", { withCredentials: true });
    setUser({});
    console.log("hey");
  };
  // console.log(user)
  const login = async () => {
    // const data = { username, password };
    // await axios.post("http://localhost:4000/login", data, {
    //   withCredentials: true,
    // });
    console.log("dcc")
  };
  return (
    <AuthModalProvider>
      {/* <UserProvider> */}
      <UserContext.Provider value={{ user, setUser, logout, logout }}>
        <ModalProvider>
          <Header />

          <Authmodal />
          <Headerboard />
          <Postform />
          <Redditmain />
        </ModalProvider>
      </UserContext.Provider>
      {/* </UserProvider> */}
    </AuthModalProvider>
  );
}

export default App;
