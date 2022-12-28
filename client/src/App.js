import "./header.css";
import "./belowheader.css";
import "./redditmain.css";
import "./components/Header";
import avatar from "./avatar.webp";
import inputavatar from "./input-avatar.png";
import Header from "./components/Header";
import Headerboard from "./components/Headerboard";

function App() {
  return (
    <div>
      <Header />
      <Headerboard />
      <div className="reddit-main">
        <div className="first-input">
          <div className="input-avatar">
            <img src={inputavatar} alt="" />
          </div>
          <form action="">
            <input type="text" className="first-form" placeholder="New Post" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
