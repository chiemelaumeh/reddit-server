import React from "react";
import { useState, useContext } from "react";


import Headerbuttons from "./Headerbuttons";
import OutsideClickHandler from 'react-outside-click-handler';
import AuthModalContext from "../context/AuthModalContext";

import { CiUser } from "react-icons/ci";

import logo from "../images/logo.png";
import avatar from "../images/avatar.webp";

import { CiSearch } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";

const Header = () => {
  const [userDropDownVisibilityClass, setUserDropDownVisibilityClass] = useState("hidden")
  const { modalVisibility, setModalVisibility } = useContext(AuthModalContext);

  // const useUserDropDown = (ref) => {
  //   useEffect(() => {
     
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         // alert("You clicked outside of me!");
  //         setUserDropDownVisibilityClass("hidden")
  //       }
  //     }
  
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);

  // }
  // const userDropDownRef = useRef(null)
  // useUserDropDown(userDropDownRef)

  const toggleDropDown = () => {
    console.log("this")
    if (userDropDownVisibilityClass === "hidden") {
      setUserDropDownVisibilityClass("show")
    } else {
      setUserDropDownVisibilityClass("hidden")
    }
  }

  return (
    <header className="header">
      <div className="sub-header">
        <img className="logo" src={logo} alt="" />
        <form className="form" action="">
          <CiSearch className="search-icon" />

          <input
            className="search-box"
            type="text"
            placeholder="Search Reddit"
          />
        </form>

        {/* <button className="icon-btn">
          <BsBell className="icon" />
        </button>
        <button className="icon-btn">
          <BsChatDots className="icon" />
        </button>
        <button className="icon-btn">
          <HiOutlinePlus className="icon" />
        </button> */}

        <div className="login-div">
          <Headerbuttons>Log In </Headerbuttons>
          <Headerbuttons>Sign Up </Headerbuttons>
        </div>

       <OutsideClickHandler onOutsideClick={() => setUserDropDownVisibilityClass("hidden")} >

        <button className="avatar-btn" onClick={toggleDropDown}  >
          {/* <img src={avatar} alt="" className="avatar" /> */}
          <CiUser className="icon" />
          <BsChevronDown className="icon avatar-icon" />
        </button>
        </OutsideClickHandler> 
          
        <div onClick={()=>setModalVisibility(true)}  className={userDropDownVisibilityClass === "hidden" ? "hide-box" : " show-box" }>
          <button href="" className="btn link-box">
            <SlLogin className=" login-icon" />
            Log In / Sign UP
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
