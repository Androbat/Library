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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  } 

  return (
    <div className="form_container">
      <form action="" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <div className="auth_form--input" style={{display: 'flex', flexDirection: "column"}}>
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
        <button>Sign in</button>

      </form>
    </div>
  );
}

export default SignIn;
