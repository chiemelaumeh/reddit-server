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
  const [matchingPass, setMatchingPass] = useState(true);

  // const [wrongPassState, setWrongPassState] = useState(false)

  const { modalVisibility, setModalVisibility, forgotModalVisibility, setForgotModalVisibility } = useContext(AuthModalContext);
  const { modalType, setModalType, forgotStage, setForgotStage, errorStatus, setErrorStatus, authReg, setAuthReg } = useContext(ModalContext);
  const { setUser, user, wrongPassState, setWrongPassState } =
    useContext(UserContext);

  async function register(e) {
    e.preventDefault();
    const data = { email, username, password };
    if (password === confirmPassword) {
      setMatchingPass(true);
      setModalVisibility(false);
      // setEmail("");
      // setUsername("fw");
      // setPassword("");
      // setConfirmPassword("")
      try {
        const response = await axios.post("/register", data, {
          withCredentials: true,
        });
        if(response.data.errorStatus){
          setErrorStatus(response.data.message)
        }
        if(response.data.authReg){
          setAuthReg(response.data.authReg)
        }
       
      } catch (err) {
        console.error(err.message);
      }
      setEmail("");
      setPassword("");
    } else {
      setMatchingPass(false);
    }
  }

  const login = async () => {
    setUsername("");
    setPassword("");
    const data = { username, password };
    try {
      const response = await axios.post("/login", data, {
        withCredentials: true,
      });
      setUser({ username });
      // setWrongPassState(false)


    } catch (error) {
      console.error(error.messagee);
    }
    loginFollow();
  };

  function loginFollow() {
    if (modalVisibility && username && password) {
      setWrongPassState(true);
    }
    if (modalVisibility && (username === "" || password === "")) {
      setWrongPassState(true);
    }
  }
  if (user.username || modalType === "register") {
    setWrongPassState(false);
  }
  if (user.username) {
    setModalVisibility(false);
  }

  return (
    <div className={modalVisibility ? "auth-page" : "hide-auth-page"}>
      <OutsideClickHandler onOutsideClick={() => {setModalVisibility(false); setModalType("login")}}>
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
            <span className="credentials">Username: </span>
            <input
              placeholder="case sensitive"
              required
              className="main-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label required>
            <span className="credentials">Password: </span>

            <Input
              required
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setMatchingPass(true);
              }}
            />
          </label>
          {modalType === "register" && (
            <label required>
              <span>Confirm Password: </span>

              <Input
                required
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setMatchingPass(true);
                }}
              />
              {matchingPass === false && (
                <p className="matching-Pass">Passwords Do Not Match</p>
              )}
            </label>
          )}
          {modalType === "login" && (
            <Headerbuttons onClick={login}>Log In</Headerbuttons>
          )}
          {modalType === "register" && (
            <Headerbuttons onClick={register}>Sign Up</Headerbuttons>
          )}
          {wrongPassState && modalType === "login" && (
            <p className="invalid-credentials">Invalid Username or Password</p>
          )}

          {
            errorStatus && (
              <p className="invalid-credentials">{errorStatus}</p>
            )

          }
          {modalType === "login" && (
            <div>
              <div className="login-state">
                <p className="login-p-1">New to this space ?</p>
                <button
                  className="btn"
                  onClick={() => setModalType("register")}
                >
                  SIGN UP
                </button>
              </div>
              <p onClick={()=>{setForgotStage("forgot");setModalVisibility(false)}} className="forgot-password">Forgot password?</p>
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
