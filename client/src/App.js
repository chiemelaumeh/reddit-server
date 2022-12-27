import "./style.css";
import logo from "./logo.png";
import { CiSearch } from "react-icons/ci";
import { BsBell } from "react-icons/bs";

function App() {
  return (
    <div>
      <header className="header">
        <div className="sub-header">
          <img className="logo" src={logo} alt="" />
        </div>
        <form className="form" action="">
          <CiSearch className="search-icon" />

          <input
            className="search-box"
            type="text"
            placeholder="Search Reddit"
          />
        </form>
        <BsBell className="bell-icon" />
        
      </header>
    </div>
  );
}

export default App;
