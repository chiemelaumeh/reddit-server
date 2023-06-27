import ForgotPassword from "./ForgotPassword";
import Otp from "./Otp";
import ResetPassword from "./ResetPassword";
import Recovered from "./Recovered";

import ModalContext from "../context/ModalContext";
import AuthModalContext from "../context/AuthModalContext";
import Headerbuttons from "./Headerbuttons";

import { useState, useContext } from "react";

import OutsideClickHandler from "react-outside-click-handler";
import UserContext from "../context/UserContext";

const NavigateComponents = () => {
  const { forgotStage, setForgotStage } = useContext(ModalContext);

  

  return (
    <div>
      {forgotStage === "forgot" && <ForgotPassword />}

      {forgotStage === "otp" && <Otp />}

      {forgotStage === "reset" && <ResetPassword />}

      {forgotStage === "recovered"  &&  <Recovered /> }

    
    </div>
  );
};

export default NavigateComponents;
