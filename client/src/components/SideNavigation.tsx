import { Link } from "react-router-dom";

import swirkLogo from "../assets/swirk-dark.png";

import "./SideNavigation.scss";

const SideNavigation = () => {
  return (
    <aside className="navigation__aside">
      <ul className="navigation__list">
        <li className="navigation__li--item list__item">
          <Link
            to={"/home"}
            className="navigation__link--wrapper link__wrapper link"
          >
            <article className="navigation__article--img article__img">
              <img src={swirkLogo} alt="Swirk" />
            </article>
          </Link>
        </li>
        <li className="navigation__li--item list__item">
          <Link
            to={"/home"}
            className="navigation__link--wrapper link__wrapper link"
          >
            <article className="navigation__article--item article">
              <i className="fa-solid fa-house-chimney"></i>
              <h3 className="navigation__title--item title__item title">
                Home
              </h3>
            </article>
          </Link>
        </li>
        <li className="navigation__li--item list__item">
          <Link
            to={"/explore"}
            className="navigation__link--wrapper link__wrapper link"
          >
            <article className="navigation__article--item article">
              <i className="fa-regular fa-hashtag"></i>
              <h3 className="navigation__title--item title__item title">
                Explore
              </h3>
            </article>
          </Link>
        </li>
        <li className="navigation__li--item list__item">
          <Link
            to={"/notifications"}
            className="navigation__link--wrapper link__wrapper link"
          >
            <article className="navigation__article--item article">
              <i className="fa-regular fa-bell"></i>
              <h3 className="navigation__title--item title__item title">
                Notifications
              </h3>
            </article>
          </Link>
        </li>
        <li className="navigation__li--item list__item">
          <Link
            to={"/messages"}
            className="navigation__link--wrapper link__wrapper link"
          >
            <article className="navigation__article--item article">
              <i className="fa-regular fa-envelope"></i>
              <h3 className="navigation__title--item title__item title">
                Messages
              </h3>
            </article>
          </Link>
        </li>
        <li className="navigation__li--item list__item">
          <Link
            to={"/bookmarks"}
            className="navigation__link--wrapper link__wrapper link"
          >
            <article className="navigation__article--item article">
              <i className="fa-regular fa-bookmark"></i>
              <h3 className="navigation__title--item title__item title">
                Bookmarks
              </h3>
            </article>
          </Link>
        </li>
        <li className="navigation__li--item list__item">
          <Link
            to={"/lists"}
            className="navigation__link--wrapper link__wrapper link"
          >
            <article className="navigation__article--item article">
              <i className="fa-regular fa-file"></i>
              <h3 className="navigation__title--item title__item title">
                Lists
              </h3>
            </article>
          </Link>
        </li>
        <li className="navigation__li--item list__item">
          <Link
            to={"/profile"}
            className="navigation__link--wrapper link__wrapper link"
          >
            <article className="navigation__article--item article">
              <i className="fa-regular fa-user"></i>
              <h3 className="navigation__title--item title__item title">
                Profile
              </h3>
            </article>
          </Link>
        </li>
        <li className="navigation__li--item list__item">
          <Link
            to={"/create"}
            className="navigation__link--wrapper link__wrapper link swirk__create"
          >
            <h3 className="navigation__title--item title__item title">Swirk</h3>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideNavigation;