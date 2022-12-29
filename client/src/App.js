import "./header.css";
import "./belowheader.css";
import "./redditmain.css";
import "./components/Header";
import "./components/Postform"
import Header from "./components/Header";
import Headerboard from "./components/Headerboard";
import Postform from "./components/Postform";

function App() {
  return (
    <div>
      <Header />
      <Headerboard />
      <Postform />
      
    </div>
  );
}

export default App;
