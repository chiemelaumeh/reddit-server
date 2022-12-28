import "./header.css";
import "./belowheader.css";
import "./components/Header";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="below-header"></div>
      <div className="sub-main">
        <div className="com-div">
          <img className="com-icon"
            src="https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_kxcmzy9bt1381.jpg?width=256&format=pjpg&s=0a2e472f6fae0712fee4a3b5d44920fe35dbcdaa"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
