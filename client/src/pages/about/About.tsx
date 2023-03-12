import Navigation from "../../layouts/nav/Navigation";
import Footer from "../../layouts/footer/Footer";

import "./About.scss";

const About = () => {
  return (
    <>
      <Navigation />
      <main className="about__main">
        <section className="about__section">
          <h1 className="about__heading">About Swirk</h1>
          <p className="about__paragraph">
            Welcome to Swirk! Our goal is to share valuable content with the
            world, making knowledge accessible to everyone.
          </p>

          <p className="about__paragraph">
            At Swirk, we believe that knowledge is power, and that everyone
            should have access to it. We're passionate about providing a
            platform where people can learn, grow, and share their knowledge
            with others.
          </p>

          <p className="about__paragraph">
            Our team of experienced professionals is committed to providing you
            with the best possible experience on our platform. We're constantly
            working to improve our content and services to ensure that you have
            access to the most accurate and up-to-date information.
          </p>

          <p className="about__paragraph">
            Whether you're looking to learn something new, stay up-to-date on
            the latest trends, or simply explore new ideas, we've got you
            covered. Our platform features a wide range of content, including
            articles, videos, podcasts, and more. With our intuitive search and
            navigation tools, it's easy to find the information you're looking
            for.
          </p>

          <p className="about__paragraph">
            We also believe in community and collaboration. That's why we've
            created a space where you can connect with like-minded individuals,
            share your own knowledge and insights, and engage in meaningful
            conversations.
          </p>

          <p className="about__paragraph">
            Thank you for visiting Swirk. We hope you find our platform
            informative, engaging, and inspiring. If you have any feedback or
            suggestions, we'd love to hear from you.
          </p>

          <p className="about__paragraph">Best, Swirk Team.</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
