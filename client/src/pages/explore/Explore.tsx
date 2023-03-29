import SideNavigation from "../../components/navigation/SideNavigation";
import Search from "../../components/search/SearchField";
import Trends from "../../components/trends/Trends";
import FooterSmall from "../../layouts/footer/FooterSmall";

import "./Explore.scss";

const Explore = () => {
  return (
    <main className="explore__main">
      <section className="explore__section--nav nav">
        <SideNavigation />
      </section>
      <section className="explore__section">
        <section className="explore__section--trends trends">
          <section className="search__section">
            <Search />
          </section>
          <Trends />
        </section>
      </section>
      <section className="explore__section--footer section__footer">
        <FooterSmall />
      </section>
    </main>
  );
};

export default Explore;
