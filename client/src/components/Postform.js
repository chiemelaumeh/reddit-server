import { useContext } from "react";
import inputavatar from "../images/input-avatar.png";
import AuthModalContext from "../context/AuthModalContext";
import UserContext from "../context/UserContext";


const Postform = () => {
  const {
    setPostFormModalVisibility,
    setModalVisibility, lightMode, setLightMode
  } = useContext(AuthModalContext);
  const { user} = useContext(UserContext);
  
  
  const theLightMode = lightMode ? "reddit-main-light" : "reddit-main"
  const theLightModeInput = lightMode ? "first-input-light" : "first-input"
  const popUpModal = () => {
    if (!user.username) {
      setModalVisibility(true);
    } else {
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