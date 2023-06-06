import { useContext } from "react";
import inputavatar from "../images/input-avatar.png";
import AuthModalContext from "../context/AuthModalContext";
import UserContext from "../context/UserContext";
import axios from "axios"


const Postform = () => {
  const {
    setPostFormModalVisibility,
    setModalVisibility, lightMode, setLightMode, allCommunities, setAllCommunities
  } = useContext(AuthModalContext);
  const { user} = useContext(UserContext);
  
  
  const theLightMode = lightMode ? "reddit-main-light" : "reddit-main"
  const theLightModeInput = lightMode ? "first-input-light" : "first-input"
  const getAllComunities = async() => {
    try {
      // console.log("response")
      const response = await axios.get("http://localhost:4000/communities/")
      // console.log(response)
      setAllCommunities(response.data)
    } catch (error) {
      
    console.error(error.message)
    }

  } 


  const popUpModal = () => {
    if (!user.username) {
      setModalVisibility(true);
    } else {
  getAllComunities()
      setPostFormModalVisibility(true);
    }
  };

  return (
    <>
      <div className={theLightMode}>
        <div className={theLightModeInput}>
          <div className="input-avatar">
            <img src={inputavatar} alt="" />
          </div>
          <form action="">
            <input
              type="text"
              onClick={(e) => {
                e.preventDefault();
                popUpModal();
            
              }}
              className="first-form"
              placeholder="New Post"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Postform;