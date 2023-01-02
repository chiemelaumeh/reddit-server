import "./styles/header.css";
import "./styles/headerboard.css";
import "./styles/postform.css";
import "./styles/redditstory.css";
import "./styles/headerbuttons.css"


import Header from "./components/Header";
import Headerboard from "./components/Headerboard";
import Postform from "./components/Postform";
import Redditmain from "./components/Redditmain";
import Authmodal from "./components/Authmodal";

function App() {
  return (
    <div>
      <Header />
      <Authmodal />
      <Headerboard />
      <Postform />
      <Redditmain />
    
      
    </div>
  );
}

export default App;
