import SideNavigation from "../../../components/navigation/SideNavigation";
import Post from "../../../components/post/Post";
import Search from "../../../components/search/Search";
import Trends from "../../../components/trends/Trends";

import dummyData from "./dummy.json";

import "./Profile.scss";

const Profile = () => {
  return (
    <main className="profile__main">
      <section className="profile__section--nav nav">
        <SideNavigation />
      </section>
      <section className="profile__section">
        <div className="profile__info">
          <h2 className="profile__headin--name name">{dummyData.name}</h2>
          <h4 className="profile__headin--name name swirks__number">
            {dummyData.swirks.length} Swirks
          </h4>
        </div>
        <article className="profile__article--image profile__images">
          <img
            src={dummyData.cover}
            alt={`${dummyData.name} Cover`}
            className="profile__cover"
          />
          <div className="profile__wrapper--img wrapper__img">
            <img
              src={dummyData.image}
              alt={dummyData.name}
              className="profile__img"
            />
          </div>
        </article>

        {/* render user posts */}
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
      <section className="profile__section--trends trends">
        <section className="search__section">
          <Search />
        </section>
        <Trends />
      </section>
    </main>
  );
};

export default Profile;
