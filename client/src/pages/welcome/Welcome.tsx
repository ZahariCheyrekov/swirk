import { Link } from "react-router-dom";

import background from "../../assets/home-background.png";
import swirkLogo from "../../assets/swirk-light.png";

import "./Welcome.scss";

const Welcome = () => {
  return (
    <main className="main__welcome">
      <section className="main__welcome--section image__section">
        <img
          src={background}
          alt="Swirk"
          className="main__background img"
          loading="lazy"
        />
        <img
          src={swirkLogo}
          alt="Swirk"
          className="main__welcome--img swirk__logo image"
          loading="lazy"
        />
      </section>
      <section className="main__welcome--section">
        <article className="main__welcome--article article">
          <h1 className="article__heading--join heading__join">
            Join Swirk Now
          </h1>
          <h2 className="article__heading--content heading__content">
            Don't miss new and exciting content
          </h2>
          <Link to={"/login"} className="article__link--sign sign__link link">
            Sign In
          </Link>
          <Link to={"/home"} className="article__link--home home__link link">
            Explore Swirk
          </Link>
          <p className="article__paragraph--terms terms">
            By signing up you agree to the{" "}
            <Link to={"/"}>Terms of Service</Link> and{" "}
            <Link to={"/"}>Privacy Policy</Link>, including{" "}
            <Link to={"/"}>Cookie Use</Link>.
          </p>
          <p className="article__paragraph--signin signin">
            Already have an account? <Link to={"/login"}>Log In</Link>
          </p>
        </article>
      </section>
    </main>
  );
};

export default Welcome;
