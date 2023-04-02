import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import swirkLogo from "../../assets/swirk-dark.png";
import { UserContext } from "../../contexts/UserContext";

import "./Navigation.scss";
import useScrollLock from "../../hooks/useScrollLock";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { toggleScrollLock } = useScrollLock();
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuClick = () => {
    setMenuOpened((prevState) => !prevState);
    toggleScrollLock();
  };

  return (
    <section className={`navigation__section ${menuOpened && "open"}`}>
      <nav className="navigation__nav">
        <article className="navigation__article">
          <img
            src={swirkLogo}
            alt="Swirk"
            className="navigation__img--logo img__logo"
          />
        </article>
        <MenuIcon
          className="nav__menu--icon menu__icon"
          onClick={handleMenuClick}
        />
        <ul className={`nav__list ${menuOpened && "open"}`}>
          <li className="nav__li--item">
            <Link to={"/home"}>Home</Link>
          </li>
          <li className="nav__li--item">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="nav__li--item">
            <Link to={"/explore"}>Explore</Link>
          </li>
          {user._id && (
            <>
              <li className="nav__li--item">
                <Link to={"/bookmarks"}>Bookmarks</Link>
              </li>
              <li className="nav__li--item">
                <Link to={"/create"}>Create</Link>
              </li>
            </>
          )}
          {!user._id && (
            <>
              <li className="nav__li--item">
                <Link to={"/register"}>Register</Link>
              </li>
              <li className="nav__li--item">
                <Link to={"/login"}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
