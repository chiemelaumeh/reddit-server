import { useContext } from "react";
import inputavatar from "../images/input-avatar.png";
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
