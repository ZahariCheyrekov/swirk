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
        <section className="profile__section--content user__content">
          <div className="profile__wrapper--actions profile__actions">
            <button className="profile__button--edit edit__button">
              Edit profile
            </button>
          </div>
          <div className="profile__wrapper--info user__info">
            <h2 className="profile__heading--name name">{dummyData.name}</h2>
            <h3 className="profile__heading--nickname nickname">
              {dummyData.nickname}
            </h3>
            <p className="profile__paragrpah--bio bio">{dummyData.bio}</p>
            <h3 className="profile__heading--followers heading__followers">
              {dummyData.followers}{" "}
              <span className="followers__text">Followers</span>
            </h3>
            <h3 className="profile__heading--following heading__following">
              {dummyData.following}{" "}
              <span className="following__text">Following</span>
            </h3>
          </div>
        </section>
        <ul className="profile__list--timelines timelines">
          <li className="profile__li--timeline timeline">
            <h3 className="profile__heading--timelin timeline__text">Swirks</h3>
          </li>
          <li className="profile__li--timeline timeline">
            <h3 className="profile__heading--timelin timeline__text">
              Swirk Likes
            </h3>
          </li>
          <li className="profile__li--timeline timeline">
            <h3 className="profile__heading--timelin timeline__text">
              Swirk Comments
            </h3>
          </li>
          <li className="profile__li--timeline timeline">
            <h3 className="profile__heading--timelin timeline__text">
              Swirks Shared
            </h3>
          </li>
        </ul>

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
