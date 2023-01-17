import Headerboard from "./Headerboard"
import Postform from "./Postform"
import Postlisting from "./Postlisting"
import { useLocation } from "react-router-dom"

const Board = () => {
  return (
    <div>
         <Headerboard />
          <Postform />
          <Postlisting />
    </div>
  )
}

export default Board