import { Link } from "react-router-dom";

import "./Auth.scss";

const Auth = () => {
  return (
    <main className="main__auth">
      <form action="POST" className="main__auth--form auth__form">
        <legend className="auth__form--legend legend">Log in to Swirk</legend>

        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="auth__form--input auth__email email input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth__form--input auth__password password input"
        />

        <button
          type="submit"
          className="auth__form--button auth__button button"
        >
          Log In
        </button>

        <Link to={"/register"}>Sign up to Swirk</Link>
      </form>
    </main>
  );
};

export default Auth;
