import { useContext } from "react"
import AuthModalContext from "../context/AuthModalContext"

const EditAndDelete = (props) => {
  const{ showEditandDelete } = useContext(AuthModalContext)
  const setShow = showEditandDelete ? "new-comp" : "hide-new-comp"
  return (
    <div className={setShow}></div>
  )
}

export default EditAndDelete

