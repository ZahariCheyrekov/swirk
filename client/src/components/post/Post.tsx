import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import dummyData from "./dummy.json";

import "./Post.scss";

const Post = () => {
  return (
    <div className="post__wrapper">
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
          <article className="post__article--user">
            <h3 className="post__heading--user heading__user">
              {dummyData.name}
            </h3>
            <h3 className="post__heading--nickname">@{dummyData.nickname}</h3>
            <span className="post__span--dot">·</span>
            <h3 className="post__heading--time">{dummyData.time}</h3>
          </article>
          <p className="post__paragraph--cotent paragraph content">
            {dummyData.content}
          </p>
          <section className="post__section--actions section__actions actions">
            <ul className="post__list--actions">
              <li className="post__li--item action__item">
                <span className="post__span--action action__comments comments">
                  <ChatBubbleOutlineOutlinedIcon />
                  {dummyData.comments.length}
                </span>
              </li>
              <li className="post__li--item action__item">
                <span className="post__span--action action__swirks swirks">
                  <ShareOutlinedIcon />
                  {dummyData.reswirk.length}
                </span>
              </li>
              <li className="post__li--item action__item">
                <span className="post__span--action action__likes likes">
                  <FavoriteBorderOutlinedIcon />
                  {dummyData.likes.length}
                </span>
              </li>
            </ul>
          </section>
        </summary>
      </article>
    </div>
  );
};

export default Post;
