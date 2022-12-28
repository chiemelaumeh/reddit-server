import "./style.css";
import logo from "./logo.png";
import { CiSearch } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { HiOutlinePlus } from "react-icons/hi";

function App() {
  return (
    <div>
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
        
        <button className="icon-btn"><BsBell className="icon" /></button>
        <button className="icon-btn"><BsChatDots className="icon" /></button>
        <button className="icon-btn"><HiOutlinePlus className="icon"/></button>
        <button>
          
        </button>
       
        </div>
        
      </header>
    </div>
  );
}

export default App;
