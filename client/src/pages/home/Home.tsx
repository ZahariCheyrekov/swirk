import SideNavigation from "../../components/navigation/SideNavigation";
import Post from "../../components/post/Post";
import Search from "../../components/search/Search";
import Trends from "../../components/trends/Trends";

import "./Home.scss";

const Home = () => {
  return (
    <main className="main__home">
      <section className="home__section--nav nav">
        <SideNavigation />
      </section>
      <section className="home__posts">
        <Post />
      </section>
      <section className="home__section--trends trends">
        <section className="search__section">
          <Search />
        </section>
        <Trends />
      </section>
    </main>
  );
};

export default Home;
