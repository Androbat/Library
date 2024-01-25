import { Link } from "react-router-dom";

type Props = {
  isAuthenticated: boolean;
};

const Navbar = ({ isAuthenticated }: Props) => {
  console.log(isAuthenticated);
  return (
    <nav
      className="nav_container"
    >
      <div>
        <h2 style={{ margin: 0 }}>Library</h2>
      </div>
      {isAuthenticated ? (
        <div>
          <Link to={"/auth/signin"} className="sign_out--btn">
            Log out
          </Link>
        </div>
      ) : (
        <div>
          <Link to={"/auth/signin"} className="log_btn">
            Sign in
          </Link>
          <Link to={"/auth/signup"} className="sign_btn">
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
