import { useContext } from "react";
import inputavatar from "../images/IMG_7758.PNG";
import AuthModalContext from "../context/AuthModalContext";
import UserContext from "../context/UserContext";
import axios from "axios";

const Postform = () => {
  const {
    setPostFormModalVisibility,
    setModalVisibility,
    lightMode,
    setAllCommunities,
  } = useContext(AuthModalContext);
  const { user } = useContext(UserContext);
  // console.log(user)
  
  const theLightMode = lightMode ? "reddit-main-light" : "reddit-main";
  const theLightModeInput = lightMode ? "first-input-light" : "first-input";
  const getAllComunities = async () => {
    try {
      const response = await axios.get("/communities/");
      setAllCommunities(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const popUpModal = () => {
    if (!user.username) {
      setModalVisibility(true);
    } else {
      getAllComunities();
      setPostFormModalVisibility(true);
    }
  };

  return (
    <>
      <div className={theLightMode}>
        <div className={theLightModeInput}>
          { !!user.username &&

          <div className="input-avatar">
            <img src={inputavatar} alt="" />
          
          </div>
          }
          <form
            action=""
            onClick={(e) => {
              e.preventDefault();
              popUpModal();
            }}
          >
            <span type="text" disabled className="first-form-input" placeholder="New Post" >
              <p className="create-text">Create post</p>
              </span>
          </form>
        </div>
      </div>
    </>
  );
};
export default Postform;
