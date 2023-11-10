import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [confPwd, setConfPwd] = useState<string>("");

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

  return (
    <div className="form_container">
      <form action="">
        <h2>Sign in</h2>

        <div className="auth_form--input">
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            value={name}
            onChange={nameChange}
          />
        </div>

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

        <div className="auth_form--input">
          <input
            type="password"
            placeholder="Password"
            value={confPwd}
            name="confPwd"
            onChange={confPwdChange}
          />
        </div>
      </form>
    </div>
  );
}

export default SignIn;
