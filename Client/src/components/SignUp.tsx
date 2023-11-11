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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default SignIn;
