import SideNavigation from "../../components/navigation/SideNavigation";
import Search from "../../components/search/SearchField";
import Trends from "../../components/trends/Trends";

import "./Notifications.scss";

const Notifications = () => {
  return (
    <main className="main__notifications">
      <section className="notifications__section--nav nav">
        <SideNavigation />
      </section>
      <section className="notifications__comming--soon main__section--center center__main--section">
        <div className="notifications__wrapper--content">
          <h1 className="notifications__heading--title">Notifications</h1>
          <h2 className="notifications__heading--soon heading__soon">
            Still in development... Coming soon!
          </h2>
        </div>
      </section>
      <section className="notifications__section--trends trends">
        <section className="search__section">
          <Search />
        </section>
        <Trends />
      </section>
    </main>
  );
};

export default Notifications;
