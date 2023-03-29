import SearchField from "../../../components/search/SearchField";
import SideNavigation from "../../../components/navigation/SideNavigation";
import Trends from "../../../components/trends/Trends";

import "./Search.scss";

const Search = () => {
  return (
    <main className="search__main">
      <section className="search__section--nav nav">
        <SideNavigation />
      </section>
      <section className="search__section--sec">
        <section className="search__section--trends trends">
          <section className="search__section">
            <SearchField />
          </section>
        </section>
      </section>
      <section className="search__section--footer section__footer">
        <Trends />
      </section>
    </main>
  );
};

export default Search;
