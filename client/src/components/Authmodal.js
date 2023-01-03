import Headerbuttons from "./Headerbuttons";
import Input from "./Input";

const Authmodal = () => {
  return (
    <div className="auth-page">
      <div className="auth-sub">
        <h1>Login</h1>
        <label>
          <span>Username: </span>
          <Input type="text" />
        </label>
        <label>
          <span>Password: </span>

          <Input type="password" />
        </label>
        <Headerbuttons>Login</Headerbuttons>
        <div>
          New to Reddit? <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Authmodal;
