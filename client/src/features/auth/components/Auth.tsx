import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Auth.scss";

const Auth = () => {
  const { pathname } = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleIconClick = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (pathname === "/login") {
      setIsLogin(true);
    } else if (pathname === "/register") {
      setIsLogin(false);
    }
  }, [pathname]);

  return (
    <main className="main__auth">
      <form action="POST" className="main__auth--form auth__form">
        <legend className="auth__form--legend legend">
          {isLogin ? "Log in to Swirk" : "Register to Swirk"}
        </legend>

        {!isLogin && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="auth__form--input auth__firstName name input"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="auth__form--input auth__lastName name input"
            />
          </>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="auth__form--input auth__email email input"
        />

        <label className="auth__label--password label__password">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="auth__form--input auth__password password input"
          />
          <i className="fa-regular fa-eye" onClick={handleIconClick}></i>
        </label>

        {!isLogin && (
          <label className="auth__label--password label__password">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Repeat password"
              className="auth__form--input auth__password password input"
            />
            <i className="fa-regular fa-eye" onClick={handleIconClick}></i>
          </label>
        )}

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
