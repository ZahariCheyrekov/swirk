import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import appStore from "../../assets/app-store.png";
import googlePlay from "../../assets/google-play.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__section">
        <ul className="footer__list--main main__list">
          <ul className="footer__list--child child">
            <li className="footer__li--item li__heading">COMPANY</li>
            <li className="footer__li--item child__item">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="footer__li--item child__item">
              <Link to={"/"}>Careers</Link>
            </li>
            <li className="footer__li--item child__item">
              <Link to={"/"}>Terms</Link>
            </li>
            <li className="footer__li--item child__item">
              <Link to={"/"}>Privacy</Link>
            </li>
            <li className="footer__li--item child__item">
              <Link to={"/"}>Interet Based Ads</Link>
            </li>
            <li className="footer__li--item child__item">
              <Link to={"/"}>Ad Preferences</Link>
            </li>
            <li className="footer__li--item child__item">
              <Link to={"/"}>Help</Link>
            </li>
          </ul>
          <ul className="footer__list--child child">
            <li className="footer__li--item li__heading">WORK WITH US</li>
            <li className="footer__li--item child__item">
              <Link to={"/"}>Swirk Creators</Link>
            </li>
            <li className="footer__li--item child__item">
              <Link to={"/"}>Advertise</Link>
            </li>
            <li className="footer__li--item child__item">
              <Link to={"/"}>Authors & Ads Blog</Link>
            </li>
            <li className="footer__li--item child__item">
              <Link to={"/"}>API</Link>
            </li>
          </ul>
          <ul className="footer__list--child child social__icons">
            <li className="footer__li--item child__item icon__li">
              <Link
                to={"https://www.facebook.com/"}
                className="footer__link--social social__link"
              >
                <FacebookIcon />
              </Link>
            </li>
            <li className="footer__li--item child__item icon__li">
              <Link
                to={"https://twitter.com/"}
                className="footer__link--social social__link"
              >
                <TwitterIcon />
              </Link>
            </li>
            <li className="footer__li--item child__item icon__li">
              <Link
                to={"https://www.instagram.com/"}
                className="footer__link--social social__link"
              >
                <InstagramIcon />
              </Link>
            </li>
            <li className="footer__li--item child__item icon__li">
              <Link
                to={"https://www.linkedin.com/"}
                className="footer__link--social social__link"
              >
                <LinkedInIcon />
              </Link>
            </li>
          </ul>
        </ul>
        <ul className="footer__list">
          <ul className="footer__list--stores stores">
            <li className="footer__list--item shop app__store">
              <Link to={"https://www.apple.com/app-store/"}>
                <img src={appStore} alt="App Store" loading="lazy" />
              </Link>
            </li>
            <li className="footer__list--item shop google__play">
              <Link to={"https://play.google.com/store/games"}>
                <img src={googlePlay} alt="Google Play" loading="lazy" />
              </Link>
            </li>
          </ul>
          <li className="footer__list--copy copyright">
            &copy; {new Date().getFullYear()} Swirk, Inc.
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
