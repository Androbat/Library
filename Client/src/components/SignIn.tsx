import { useState } from "react";
import { User, firebaseSignIn } from "../firebase/firebaseSignin";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { userStore } from "../store/appStore";
function SignIn() {

  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  const navigate = useNavigate()
  const { setUser } = userStore();

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setEmail(target.value);
  };

  const pwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setPwd(target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("test");
    if (!email || !pwd) {
      return Swal.fire("Auth", "All fields must be completed!");
    }
    try {
      const userData: User = await firebaseSignIn(email, pwd);
      setUser(userData);

      setEmail("");
      setPwd("");

      navigate("/library");
    } catch (err: unknown) {
      if (err.code === "auth/user-not-found") {
        return Swal.fire("Auth", "User not found");
      } else if (err.code === "auth/wrong-password") {
        return Swal.fire("Auth", "Wrong email or password");
      }
    }
  };

  return (
    <div className="form_container">
      <form action="" onSubmit={handleSubmit} className="form">
        <h2>Sign in</h2>
        <div
          className="auth_form--input"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="John@cooper.com"
            name="email"
            id="email"
            value={email}
            onChange={emailChange}
          />
        </div>

        <div
          className="auth_form--input"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            name="password"
            id="pwd"
            onChange={pwdChange}
          />
        </div>
        <div>
          <button className="form_btn">Sign in</button>
          <p>
            Need an account? <Link to="/auth/signup">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
