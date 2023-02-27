import SideNavigation from "../../components/navigation/SideNavigation";
import Trends from "../../components/trends/Trends";

import "./Home.scss";

const Home = () => {
  return (
    <main className="main__home">
      <section className="home__section--nav nav">
        <SideNavigation />
      </section>
      <section className="home__section--trends trends">
        <Trends />
      </section>
    </main>
  );
};

export default Home;
