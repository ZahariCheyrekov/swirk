import { useNavigate } from "react-router-dom";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import dummyData from "./dummy.json";
import { IPostCreated } from "../../interfaces/Post";
import { dislikePost, likePost } from "../../api/globalAPI";
import { getUser } from "../../services/localStorage";

import "./Post.scss";
import { useState } from "react";

const Post = ({ post }: { post: IPostCreated }) => {
  const navigate = useNavigate();
  const [postLikes, setPostLikes] = useState<string[]>(post.likes);

  const handlePostClick = () => {
    // navigate(`/${dummyData.nickname}/${dummyData.postId}`);
  };

  const handlePostLike = async (
    ev: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    ev.preventDefault();

    const user = getUser();

    if (user) {
      const isLiked = postLikes.some((like) => like === user.id);
      console.log(user.id, isLiked);

      if (isLiked) {
        const filteredLikes = postLikes.filter((like) => like !== user.id);
        setPostLikes([...filteredLikes]);
        dislikePost(post._id, user.id);
      } else {
        setPostLikes((likes) => [...likes, user.id]);
        likePost(post._id, user.id);
      }
    }
  };

  return (
    <article className="post__article" onClick={handlePostClick}>
      <aside className="post__aside aside__image">
        <img
          src={post.imageSrc}
          alt={post.imageSrc}
          className="post__image"
          loading="lazy"
        />
      </aside>
      <summary className="post__summary">
        <article className="post__article--user article__user">
          <h3 className="post__heading--user heading__user">{post.userName}</h3>
          <h3 className="post__heading--nickname">@{post.nickname}</h3>
          <span className="post__span--dot">·</span>
          <h3 className="post__heading--time">
            {new Date(`${post.createdAt}`).getDate()} march
          </h3>
        </article>
        <p className="post__paragraph--cotent post__content paragraph content">
          {post.postContent}
        </p>
        <section className="post__section--actions section__actions actions">
          <ul className="post__list--actions">
            <li className="post__li--item action__item">
              <span className="post__span--action action__comments comments">
                <ChatBubbleOutlineOutlinedIcon className="post__icon--comment comment__icon post__icon" />
                <span className="post__span--commentscount comments__count">
                  {post?.comments?.length}
                </span>
              </span>
            </li>
            <li className="post__li--item action__item reswirk">
              <span className="post__span--action action__reswirks swirks">
                <ShareOutlinedIcon className="post__icon--reswirk reswirk__icon post__icon" />
                <span className="post__span--reswirkscount reswirks__count">
                  {post?.reswirks?.length}
                </span>
              </span>
            </li>
            <li
              className="post__li--item action__item like"
              onClick={handlePostLike}
            >
              <span className="post__span--action action__likes likes">
                <FavoriteBorderOutlinedIcon className="post__icon--like like__icon post__icon" />
                <span className="post__span--likescount likes__count">
                  {postLikes.length}
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
