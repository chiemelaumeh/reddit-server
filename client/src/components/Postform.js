import { useContext } from "react";
import inputavatar from "../images/input-avatar.png";
import AuthModalContext from "../context/AuthModalContext";
import UserContext from "../context/UserContext";

const Postform = () => {
  const {
    postFormModalVisibility,
    setPostFormModalVisibility,
    modalVisibility,
    setModalVisibility,
  } = useContext(AuthModalContext);
  const { user, setUser } = useContext(UserContext);

  const popUpModal = () => {
    if (!user.username) {
      setModalVisibility(true);
    } else {
      setPostFormModalVisibility(true);
    }
  };
  return (
    <>
      <div className="reddit-main">
        <div className="first-input">
          <div className="input-avatar">
            <img src={inputavatar} alt="" />
          </div>
          <form action="">
            <input
              type="text"
              onFocus={(e) => {
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
