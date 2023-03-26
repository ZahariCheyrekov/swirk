import SideNavigation from "../../components/navigation/SideNavigation";
import Search from "../../components/search/Search";
import Trends from "../../components/trends/Trends";

import dummyData from "./dummy.json";

import "./Bookmarks.scss";

const Bookmarks = () => {
  return (
    <main className="bookmarks__main">
      <section className="bookmarks__section--nav nav">
        <SideNavigation />
      </section>
      <section className="bookmarks__section main__section--center center__main--section">
        <div className="bookmarks__info">
          <h2 className="bookmarks__headin--name name">Bookmarks</h2>
          <h4 className="bookmarks__headin--name name swirks__number">
            @{dummyData.nickname}
          </h4>
        </div>
      </section>
      <section className="bookmarks__section--trends trends">
        <section className="search__section">
          <Search />
        </section>
        <Trends />
      </section>
    </main>
  );
};

export default Bookmarks;
