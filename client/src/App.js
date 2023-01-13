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
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("http://localhost:4000/user", {
        withCredentials: true,
      });
      // .then((response) => setUser(response.data))
      setUser(response.data);
    };
    getUser();

    const getComments = async () => {
      const response = await axios.get("http://localhost:4000/comments", {
        withCredentials: true,
      });
      // console.log(response.data)
      setComments(response.data);
    };
    getComments();
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
          <Header />
          <Authmodal />
          <Headerboard />

          <div>
            {comments.map((comment) => (
              <>
                <Redditmain {...comment}/>
              </>
            ))}
          </div>
        </ModalProvider>
      </UserContext.Provider>
      {/* </UserProvider> */}
    </AuthModalProvider>
  );
}

export default App;
