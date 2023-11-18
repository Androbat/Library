import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <header>
        <nav className="nav_container">
          <div>
            <h3>Library</h3>
          </div>
          <div>
            <Link to={"/auth/signin"} className="log_btn">
              Sign in
            </Link>
            <Link to={"/auth/signup"} className="sign_btn">
              Sign up
            </Link>
          </div>
        </nav>
      </header>

      <main className="main_container">
        <div className="main_exp">
          <h2>Your next library to save all your books.</h2>
          <img className="hero_img" src="/bookpile.png" alt="" />
        </div>
        <div className="main_btns">
          <Link to={"/auth/signin"} className="log_btn">
            Sign in
          </Link>
          <Link to={"/auth/signup"} className="sign_btn">
            Sign up
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Hero;
