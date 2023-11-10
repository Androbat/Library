import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setEmail(target.value);
  };

  const pwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setPwd(target.value);
  };

  return (
    <div className="form_container">
      <form action="">
        <h2>Sign in</h2>
        <div className="auth_form--input">
          <input
            type="email"
            placeholder="John@cooper.com"
            name="email"
            value={email}
            onChange={emailChange}
          />
        </div>

        <div className="auth_form--input">
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            name="password"
            onChange={pwdChange}
          />
        </div>
      </form>
    </div>
  );
}

export default SignIn;
