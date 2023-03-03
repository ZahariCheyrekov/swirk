import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import dummyData from "./dummy.json";

import "./Post.scss";

const Post = () => {
  return (
    <article className="post__article">
      <aside className="post__aside aside__image">
        <img
          src={dummyData.image}
          alt={dummyData.name}
          className="post__image"
          loading="lazy"
        />
      </aside>
      <summary className="post__summary">
        <article className="post__article--user article__user">
          <h3 className="post__heading--user heading__user">
            {dummyData.name}
          </h3>
          <h3 className="post__heading--nickname">@{dummyData.nickname}</h3>
          <span className="post__span--dot">·</span>
          <h3 className="post__heading--time">{dummyData.time}</h3>
        </article>
        <p className="post__paragraph--cotent post__content paragraph content">
          {dummyData.content}
        </p>
        <section className="post__section--actions section__actions actions">
          <ul className="post__list--actions">
            <li className="post__li--item action__item">
              <span className="post__span--action action__comments comments">
                <ChatBubbleOutlineOutlinedIcon className="post__icon--comment comment__icon post__icon" />
                <span className="post__span--commentscount comments__count">
                  {dummyData.comments.length}
                </span>
              </span>
            </li>
            <li className="post__li--item action__item">
              <span className="post__span--action action__reswirks swirks">
                <ShareOutlinedIcon className="post__icon--reswirk reswirk__icon post__icon" />
                <span className="post__span--reswirkscount reswirks__count">
                  {dummyData.reswirk.length}
                </span>
              </span>
            </li>
            <li className="post__li--item action__item">
              <span className="post__span--action action__likes likes">
                <FavoriteBorderOutlinedIcon className="post__icon--like like__icon post__icon" />
                <span className="post__span--likescount likes__count">
                  {dummyData.likes.length}
                </span>
              </span>
            </li>
          </ul>
        </section>
      </summary>
    </article>
  );
};

export default Post;
