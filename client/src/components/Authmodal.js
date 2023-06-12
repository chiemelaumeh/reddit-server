import Headerbuttons from "./Headerbuttons";
import Input from "./Input";
import { useState, useContext } from "react";
import axios from "axios";
import AuthModalContext from "../context/AuthModalContext";
import OutsideClickHandler from "react-outside-click-handler";
import ModalContext from "../context/ModalContext";
import UserContext from "../context/UserContext";

const Authmodal = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchingPass, setMatchingPass] = useState(true)

  const { modalVisibility, setModalVisibility } = useContext(AuthModalContext);
  const { modalType, setModalType } = useContext(ModalContext);
  const { setUser } = useContext(UserContext);

  async function register(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setConfirmPassword("")
    setUsername("");
    const data = { email, username, password };
    if(password === confirmPassword) {
      setMatchingPass(true)
      setModalVisibility(false)
      try {
        const response = await axios.post(
          "http://localhost:4000/register",
          data,
          {
            withCredentials: true,
          }
        );
        alert(response.data)    
      } catch (err) {
        console.error(err.message);
      }
    }else {
      setMatchingPass(false)
    }
  }

  const login = async () => {
    setModalVisibility(false);
    const data = { username, password };
    try {
      const response = await axios.post(
        "/login",
        data,
        {
          withCredentials: true,
        }
      );
      console.log(response)
      setUser({username});
     
    } catch (error) {
      console.error(error.messagee);
    }
  };

  return (
    <div className={modalVisibility ? "auth-page" : "hide-auth-page"}>
      <OutsideClickHandler onOutsideClick={() => setModalVisibility(false)}>
        <div className="auth-sub">
          {modalType === "login" && <h1>Login</h1>}
          {modalType === "register" && <h1>Register</h1>}
          {modalType === "register" && (
            <label required>
              <span>E-mail: </span>
              <Input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          )}
          <label required>
            <span>Username: </span>
            <Input
            required
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label required>
            <span>Password: </span>

            <Input
             required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {modalType === "register" && 
          <label required>
            <span>Confirm Password: </span>

            <Input
            required
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
              {matchingPass === false && (
              <p className="matching-Pass">Passwords Do Not Match</p>
              )}
          </label>
          
          }
          {modalType === "login" && (
            <Headerbuttons onClick={login}>Log In</Headerbuttons>
          )}
          {modalType === "register" && (
            <Headerbuttons 

            onClick={register}
            >Sign Up</Headerbuttons>
          )}
          {modalType === "login" && (
            <div className="login-state">
              <p className="login-p-1">New to Reddit?</p>
              <button className="btn" 
              onClick={() => setModalType("register")}>
                SIGN UP
              </button>
            </div>
          )}
          {modalType === "register" && (
            <div className="login-state">
              <p className="login-p-1">Already have an account?</p>
              <button className="btn" onClick={() => setModalType("login")}>
                LOG IN
              </button>
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Authmodal;
