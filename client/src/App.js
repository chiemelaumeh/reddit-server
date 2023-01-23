import "./styles/header.css";
import "./styles/headerboard.css";
import "./styles/postform.css";
import "./styles/redditstory.css";
import "./styles/headerbuttons.css";

import { AuthModalProvider } from "./context/AuthModalContext";
import { ModalProvider } from "./context/ModalContext";
import { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Headerboard from "./components/Headerboard";
import Postform from "./components/Postform";
import Postlisting from "./components/Postlisting";
import Redditmain from "./components/Post";
import Authmodal from "./components/Authmodal";
import UserContext from "./context/UserContext";
import AuthModalContext from "./context/AuthModalContext";
import Board from "./components/Board";
import Commentpage from "./components/Postpage";
import axios from "axios";
import Routing from "./components/Routing";

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

  // const location = useLocation()
  // console.log(location)

  return (
    <AuthModalProvider>
      {/* <UserProvider> */}
      <UserContext.Provider value={{ user, setUser, logout }}>
        <ModalProvider>
          <Authmodal />
          <Routing />
        </ModalProvider>
      </UserContext.Provider>
      {/* </UserProvider> */}
    </AuthModalProvider>
  );
}

export default App;
