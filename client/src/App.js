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
import { AuthModalProvider } from "./context/AuthModalContext";
import { ModalProvider } from "./context/ModalContext";
import axios from "axios";
import UserContext, { UserProvider } from "./context/UserContext";

import { useState, useEffect, useContext } from "react";
import { response } from "express";

function App() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:4000/user", { withCredentials: true })
      .then((response) => setUser(response.data));
  }, []);

  return (
    <AuthModalProvider>
      <UserProvider>
        <ModalProvider>
          <Header />
          <Authmodal />
          <Headerboard />
          <Postform />
          <Redditmain />
        </ModalProvider>
      </UserProvider>
    </AuthModalProvider>
  );
}

export default App;
