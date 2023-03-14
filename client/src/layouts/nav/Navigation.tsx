import { Link } from "react-router-dom";

import swirkLogo from "../../assets/swirk-dark.png";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <section className="navigation__section">
      <nav className="navigation__nav">
        <article className="navigation__article">
          <img
            src={swirkLogo}
            alt="Swirk"
            className="navigation__img--logo img__logo"
          />
        </article>
        <ul className="nav__list">
          <li className="nav__li--item">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className="nav__li--item">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="nav__li--item">
            <Link to={"/explore"}>Explore</Link>
          </li>
          <li className="nav__li--item">
            <Link to={"/bookmarks"}>Bookmarks</Link>
          </li>
          <li className="nav__li--item">
            <Link to={"/create"}>Create</Link>
          </li>
          <li className="nav__li--item">
            <Link to={"/register"}>Register</Link>
          </li>
          <li className="nav__li--item">
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;