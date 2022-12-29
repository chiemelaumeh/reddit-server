import avatar from "../avatar.webp";
import inputavatar from "../input-avatar.png";
const Postform = () => {
  return (
    <>
      <div className="reddit-main">
        <div className="first-input">
          <div className="input-avatar">
            <img src={inputavatar} alt="" />
          </div>
          <form action="">
            <input type="text" className="first-form" placeholder="New Post" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Postform;
