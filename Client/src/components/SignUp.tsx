import { useState } from "react";
import { firebaseSignUp, User } from "../firebase/firebaseSignin";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [confPwd, setConfPwd] = useState<string>("");

  // for now user type this must be a context or stored in a store, sustand or redux...
  const [user, setUser] = useState<User | null>(null);
  

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setEmail(target.value);
  };

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setName(target.value);
  };

  const pwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setPwd(target.value);
  };

  const confPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setConfPwd(target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !pwd || !name) {
      return Swal.fire("Auth", "All fields must be completed!");
    }

    if (pwd !== confPwd) {
      return Swal.fire("Auth", "Passwords must be equal!");
    }
    try {
      const userData: User = await firebaseSignUp(email, pwd, name);
      setUser(userData);
      console.log(user);
      setName("");
      setEmail("");
      setPwd("");
      setConfPwd("");
    } catch (err: unknown) {
      if (err.code === "auth/email-already-exists") {
       return Swal.fire("Auth", "Email already exist");
      }
    }
  }

  return (
    <div className="form_container">
      <form action="" onSubmit={handleSubmit}>
        <h2>Sign up</h2>

        <div className="auth_form--input" style={{display: 'flex', flexDirection: "column"}}>
        <label htmlFor="name">Name:</label>

          <input
            type="text"
            placeholder="John Doe"
            name="name"
            value={name}
            id="name"
            onChange={nameChange}
          />
        </div>

        <div className="auth_form--input" style={{display: 'flex', flexDirection: "column"}}>
        <label htmlFor="email">Email:</label>

          <input
            type="email"
            placeholder="John@cooper.com"
            name="email"
            value={email}
            id="email"
            onChange={emailChange}
          />
        </div>

        <div className="auth_form--input" style={{display: 'flex', flexDirection: "column"}}>
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

        <div className="auth_form--input" style={{display: 'flex', flexDirection: "column"}}>
        <label htmlFor="confPwd">Confirm password:</label>

          <input
            type="password"
            placeholder="Password"
            value={confPwd}
            name="confPwd"
            id="confPwd"
            onChange={confPwdChange}
          />
        </div>
        <div>
        <button>Sign up</button>
        <p>
            Already have an account? <Link to="/auth/signin">Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
