import { useParams } from "react-router-dom"

const Commentpage = () => {
 const  {id} = useParams()
 
console.log(id)
  return (
    <div>{id}</div>
  )
}

export default Commentpage