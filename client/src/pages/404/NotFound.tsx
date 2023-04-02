import Footer from "../../layouts/footer/Footer";
import Navigation from "../../layouts/nav/Navigation";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <section className="section__not--found">
        <h1 className="not__found--code code">404</h1>
        <h3 className="not__found--error error">Not Found</h3>
        <h4 className="not__found--error--message error__message">
          The resource requested could not be found on this server :(
        </h4>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
