import LoginDiv from "./LoginDiv";
import SignupDiv from "./SignupDiv";

const LandingPage = () => {
  return (
    <div className="LandingPage content-c">
      <div className="LandingPage-main-div">
        <div className="landing-page-main-div-child-1">
          <p>
            INSTANTLY <span className="landing-page-bold-span">LAUNCH</span>
          </p>

          <p>
            AND <span className="landing-page-bold-span">MANAGE</span> YOUR
          </p>

          <p>
            NEXT <span className="landing-page-bold-span">NFT PROJECTS</span>
          </p>
        </div>

        <div className="landing-page-main-div-child-2">
          Xtraverse streamlines the production of NFT projects by equipping your
          agency with what it needs to scale without limits.
        </div>

        <div className="landing-page-main-div-child-3">
          <button>Contact Sales</button>

          <button>Start Building</button>
        </div>

        <div className="landing-page-main-div-child-4">
          <p>10x your agency.</p>

          <button>&#8595;</button>
        </div>
      </div>

      <div className="landing-page-absolute-divs">
        <div className="login-div-container-in-landing-page">
          <LoginDiv />
        </div>

        <div className="signup-div-container-in-landing-page">
          <SignupDiv />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
