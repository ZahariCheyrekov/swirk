import { Link } from "react-router-dom";
import "./FooterSmall.scss";

const FooterSmall = () => {
  return (
    <footer className="footer__small">
      <ul className="footer__list">
        <li className="footer__li--item item__small">
          <Link to={"/"} className="footer__link--small link">
            Terms of service
          </Link>
        </li>
        <li className="footer__li--item item__small">
          <Link to={"/"} className="footer__link--small link">
            Privacy Policy
          </Link>
        </li>
        <li className="footer__li--item item__small">
          <Link to={"/"} className="footer__link--small link">
            Cookie Policy
          </Link>
        </li>
        <li className="footer__li--item item__small">
          <Link to={"/"} className="footer__link--small link">
            Accessiblity
          </Link>
        </li>
        <li className="footer__li--item item__small">
          <Link to={"/"} className="footer__link--small link">
            Ads Info
          </Link>
        </li>
        <li className="footer__li--item item__small">
          <Link to={"/"} className="footer__link--small link">
            More
          </Link>
        </li>
      </ul>
      <p className="footer__paragraph--copy">
        <span className="footer__span--inc copy__span">
          &copy;{new Date().getFullYear()} Swirk, Inc.
        </span>
      </p>
    </footer>
  );
};

export default FooterSmall;
