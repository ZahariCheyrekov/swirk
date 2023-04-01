import SideNavigation from "../../components/navigation/SideNavigation";
import Search from "../../components/search/SearchField";
import Trends from "../../components/trends/Trends";

import "./Messages.scss";

const Messages = () => {
  return (
    <main className="main__messages">
      <section className="messages__section--nav nav">
        <SideNavigation />
      </section>
      <section className="messages__comming--soon main__section--center center__main--section">
        <div className="messages__wrapper--content">
          <h1 className="messages__heading--title">Messages</h1>
          <h2 className="messages__heading--soon heading__soon">
            Still in development... Coming soon!
          </h2>
        </div>
      </section>
      <section className="messages__section--trends trends">
        <section className="search__section">
          <Search />
        </section>
        <Trends />
      </section>
    </main>
  );
};

export default Messages;
