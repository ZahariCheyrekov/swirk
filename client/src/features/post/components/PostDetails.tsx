import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";

import SideNavigation from "../../../components/navigation/SideNavigation";
import Post from "../../../components/post/Post";
import Search from "../../../components/search/Search";
import Trends from "../../../components/trends/Trends";

import dummyData from "./dummy.json";

import "./PostDetails.scss";

const PostDetails = () => {
  return (
    <main className="details__main">
      <section className="details__section--nav nav">
        <SideNavigation />
      </section>
      <section className="details__section">
        <div className="details__info">
          <h2 className="details__headin--name name">Swirk</h2>
        </div>
        <Post />
        <article className="details__article--reply">
          <div className="details__wrapper--image">
            <img src={dummyData.image} alt={dummyData.name} />
          </div>
          <section className="details__section--content">
            <h3 className="details__heading--text heading__text">
              Replying to @{dummyData.nickname}
            </h3>
            <form className="details__form--reply">
              <input
                type="text"
                placeholder="Swirk your reply"
                className="details__input--reply"
              />
            </form>
            <span className="details__span--actions span__actions">
              <PhotoSizeSelectActualOutlinedIcon className="details__icon--photo photo__icon" />
              <button className="details__button--reply button__element">
                Reply
              </button>
            </span>
          </section>
        </article>
      </section>
      <section className="details__section--trends trends">
        <section className="search__section">
          <Search />
        </section>
        <Trends />
      </section>
    </main>
  );
};

export default PostDetails;
