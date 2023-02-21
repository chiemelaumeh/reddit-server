import { useContext } from "react";
import inputavatar from "../images/input-avatar.png";
import AuthModalContext from "../context/AuthModalContext";

const Postform = () => {
  const { postFormModalVisibility, setPostFormModalVisibility } =
    useContext(AuthModalContext);
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
                setPostFormModalVisibility(true);
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
