import "./style.css";
import logo from "./logo.png";
function App() {
  return (
    <div>
      <header className="header">
        <div className="sub-header">
          <img className="logo" src={logo} alt="" />
        </div>
        <form action="">
          <input className="search-box" type="text" />
        </form>
      </header>
    </div>
  );
}

export default App;
