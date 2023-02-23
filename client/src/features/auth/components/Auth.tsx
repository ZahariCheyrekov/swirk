import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Auth.scss";

const Auth = () => {
  const { pathname } = useLocation();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (pathname === "/login") {
      setIsLogin(true);
    } else if (pathname === "/register") {
      setIsLogin(false);
    }
  }, [pathname]);

  console.log(pathname, isLogin);
  return (
    <main className="main__auth">
      <form action="POST" className="main__auth--form auth__form">
        <legend className="auth__form--legend legend">
          {isLogin ? "Log in to Swirk" : "Register to Swirk"}
        </legend>

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
          {isLogin ? "Log In" : "Register"}
        </button>

        <Link
          to={isLogin ? "/register" : "/login"}
          className="auth__form--link auth__link link"
        >
          {isLogin ? "Sign up to Swirk" : "Sign in to Swirk"}
        </Link>
      </form>
    </main>
  );
};

export default Auth;
