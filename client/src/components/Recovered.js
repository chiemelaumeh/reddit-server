import { useContext } from "react";
import ModalContext from "../context/ModalContext";




const Recovered = () => {
  const { forgotStage, setForgotStage } = useContext(ModalContext);
  return (
    <div className={forgotStage ? "auth-page" : "hide-auth-page"}>
      <div className="auth-sub">
        <p onClick={()=> {setForgotStage("")}}>Recovered</p>
      </div>
    </div>
  );
};

export default Recovered;
