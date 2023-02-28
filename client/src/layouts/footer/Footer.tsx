import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__section">
        <ul className="footer__list--main">
          <ul className="footer__list--child child">
            <li className="footer__li--item li__heading">COMPANY</li>
            <li className="footer__li--item">About Us</li>
            <li className="footer__li--item">Careers</li>
            <li className="footer__li--item">Terms</li>
            <li className="footer__li--item">Privacy</li>
            <li className="footer__li--item">Interet Based Ads</li>
            <li className="footer__li--item">Ad Preferences</li>
            <li className="footer__li--item">Help</li>
          </ul>
          <ul className="footer__list--child child">
            <li className="footer__li--item li__heading">WORK WITH US</li>
            <li className="footer__li--item">Swirk Creators</li>
            <li className="footer__li--item">Advertise</li>
            <li className="footer__li--item">Authors & Ads Blog</li>
            <li className="footer__li--item">API</li>
          </ul>
          <ul className="footer__list--child child social__icons">
            <li className="footer__li--item li__heading">FB</li>
            <li className="footer__li--item">TWITTER</li>
            <li className="footer__li--item">INSTAGRA</li>
            <li className="footer__li--item">LINKEDIN</li>
          </ul>
        </ul>
        <ul className="footer__list">
          <ul>
            <li className="footer__list--item shop app__store"></li>
            <li className="footer__list--item shop google__play"></li>
          </ul>
          <li className="footer__list--copy copyright">
            {new Date().getFullYear()} Swirk, Inc.
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
