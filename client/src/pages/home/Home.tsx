import SideNavigation from "../../components/SideNavigation";

import "./Home.scss";

const Home = () => {
  return (
    <main className="main__home">
      <section className="home__section--nav nav">
        <SideNavigation />
      </section>
    </main>
  );
};

export default Home;