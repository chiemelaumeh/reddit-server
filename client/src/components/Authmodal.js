import Headerbuttons from "./Headerbuttons";
import Input from "./Input";

const Authmodal = () => {
  return (
    <div className="auth-page">
      <div className="auth-sub">
        <h1>Login</h1>

        <div >
          <Input type="text" />

          <Input type="password" />
        </div>

        <Headerbuttons>Login</Headerbuttons>
      </div>
    </div>
  );
};

export default Authmodal;
