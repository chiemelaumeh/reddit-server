import "./styles/header.css";
import "./styles/headerboard.css";
import "./styles/postform.css";
import "./styles/redditstory.css";
import "./styles/headerbuttons.css";

import { AuthModalProvider } from "./context/AuthModalContext";
import { ModalProvider } from "./context/ModalContext";
import { useState, useEffect, useContext } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Headerboard from "./components/Headerboard";
import Postform from "./components/Postform";
import Postlisting from "./components/Postlisting";
import Redditmain from "./components/Redditmain";
import Authmodal from "./components/Authmodal";
import UserContext from "./context/UserContext";
import AuthModalContext from "./context/AuthModalContext";
import Board from "./components/Board";
import Commentpage from "./components/Commentpage";
import axios from "axios";

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
  // useEffect(() => {
  const logout = async () => {
    await axios.get("http://localhost:4000/logout", {
      withCredentials: true,
    });
    setUser({});
  };

  // function runLogout() {

  // }
  // runLogout();
  // }, []);
  // console.log(user)

  return (
    <AuthModalProvider>
      {/* <UserProvider> */}
      <UserContext.Provider value={{ user, setUser, logout }}>
        <ModalProvider>
          <Authmodal />
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Board />} />
              <Route exact path="/comments/:id" element={<Commentpage />} />
            </Routes>
          </Router>
        </ModalProvider>
      </UserContext.Provider>
      {/* </UserProvider> */}
    </AuthModalProvider>
  );
}

export default App;
