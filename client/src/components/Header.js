import React from "react";
import { useState, useEffect, useRef } from "react";


import Headerbuttons from "./Headerbuttons";

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

  const useUserDropDown = (ref) => {
    useEffect(() => {
     
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert("You clicked outside of me!");
          setUserDropDownVisibilityClass("hidden")
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
  
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

  }
  const userDropDownRef = useRef(null)
  useUserDropDown(userDropDownRef)

  const toggleDropDown = () => {
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

        <div>
          <Headerbuttons>Log In </Headerbuttons>
          <Headerbuttons>Sign Up </Headerbuttons>
        </div>

        <button className="avatar-btn" onClick={toggleDropDown} ref={userDropDownRef}  >
          {/* <img src={avatar} alt="" className="avatar" /> */}
          <CiUser className="icon" />
          <BsChevronDown className="icon avatar-icon" />
        </button>
        <div className={userDropDownVisibilityClass === "hidden" ? "hide-box" : " show-box"}>
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
