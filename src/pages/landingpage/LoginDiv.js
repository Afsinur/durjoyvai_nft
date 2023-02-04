import top_png from "./img/x_icon.png";
import google_icon from "./img/google.png";
import Image from "next/image";

const LoginDiv = () => {
  return (
    <div className="login-form-container">
      <div className="login-form">
        <Image src={top_png} alt="x" priority />

        <button className="signin-google-btn">
          <Image src={google_icon} alt="google" />

          <span>Sign in width Goolge</span>
        </button>

        <div className="hr-bar"></div>

        <div>
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" id="Email" />
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" name="Password" id="Password" />
        </div>

        <button data-submit>Sign in</button>

        <p>
          No account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginDiv;
