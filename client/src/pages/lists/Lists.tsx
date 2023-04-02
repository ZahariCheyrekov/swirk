import SideNavigation from "../../components/navigation/SideNavigation";
import Search from "../../components/search/SearchField";
import Trends from "../../components/trends/Trends";

import "./Lists.scss";

const Lists = () => {
  return (
    <main className="main__lists">
      <section className="lists__section--nav nav">
        <SideNavigation />
      </section>
      <section className="lists__comming--soon main__section--center center__main--section">
        <div className="lists__wrapper--content">
          <h1 className="lists__heading--title">Lists</h1>
          <h2 className="lists__heading--soon heading__soon">
            Still in development... Coming soon!
          </h2>
        </div>
      </section>
      <section className="lists__section--trends trends">
        <section className="search__section">
          <Search />
        </section>
        <Trends />
      </section>
    </main>
  );
};

export default Lists;
