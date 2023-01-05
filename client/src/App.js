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
// import { UserProvider } from "./context/UserContext";
import axios from "axios";

import { useState, useEffect, useContext } from "react";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get("http://localhost:4000/user", { withCredentials: true })
    .then((response) => setUser(response.data));
  }, []);

  return (
    <AuthModalProvider>
      {/* <UserProvider> */}
        <UserContext.Provider value={user}>
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
