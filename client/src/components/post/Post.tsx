import { useContext, useEffect, useState } from "react";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteIcon from "@mui/icons-material/Delete";

import { IPostCreated } from "../../interfaces/Post";
import { UserContext } from "../../contexts/UserContext";
import {
  likePost,
  dislikePost,
  undoReswirk,
  reswirkPost,
  bookmarkPost,
  deletePost,
} from "../../api/globalAPI";

import "./Post.scss";
import { getBookmarks } from "../../features/bookmarks/api/bookmark-api";

const Post = ({ post }: { post: IPostCreated }) => {
  const { user } = useContext(UserContext);
  const [postLikes, setPostLikes] = useState<string[]>(post.likes);
  const [postReswirks, setPostReswirks] = useState<string[]>(post.reswirks);
  const [moreActionsOpen, setMoreActionsOpen] = useState<Boolean>(false);
  const [likedByUser, setLikedByUser] = useState<Boolean>(
    postLikes.some((like) => like === user._id)
  );
  const [bookamrkedByUser, setBookamrkedByUser] = useState<Boolean>();

  useEffect(() => {
    const fetchBookmarks = async () => {
      const userBookmarks = await getBookmarks(user._id);
      const isBookmarked = userBookmarks.some(
        (bookmark: string) => bookmark === user._id
      );
      console.log(userBookmarks, isBookmarked);
      setBookamrkedByUser(isBookmarked);
    };
    fetchBookmarks();
  }, [user._id]);

  const handlePostLike = async (
    ev: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    ev.preventDefault();

    if (user) {
      const isLiked = postLikes.some((like) => like === user._id);

      if (isLiked) {
        setLikedByUser(false);

        const filteredLikes = postLikes.filter((like) => like !== user._id);
        setPostLikes([...filteredLikes]);
        dislikePost(post._id, user._id);
      } else {
        setLikedByUser(true);

        setPostLikes((likes) => [...likes, user._id]);
        likePost(post._id, user._id);
      }
    }
  };

  const handlePostReswirk = async (
    ev: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    ev.preventDefault();

    if (user) {
      const isReswirked = postReswirks.some((reswirk) => reswirk === user._id);

      if (isReswirked) {
        const filteredReswirks = postReswirks.filter(
          (reswirk) => reswirk !== user._id
        );
        setPostReswirks([...filteredReswirks]);
        undoReswirk(post._id, user._id);
      } else {
        setPostReswirks((reswirks) => [...reswirks, user._id]);
        reswirkPost(post._id, user._id);
      }
    }
  };

  const handleMoreActions = (
    ev: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    ev.preventDefault();
    setMoreActionsOpen((prevState) => !prevState);
  };

  const handleDeletePost = (
    ev: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    ev.preventDefault();
    deletePost(post._id);
  };

  const handleBookmark = (ev: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    ev.preventDefault();
    setBookamrkedByUser(true);
    bookmarkPost(post._id, user?._id);
  };

  return (
    <a href={`/profile/${user.nickname}/${post._id}`}>
      <article className="post__article">
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
            <span className="post__span--main">
              <h3 className="post__heading--user heading__user">
                {post.userName}
              </h3>
              <h3 className="post__heading--nickname">@{post.nickname}</h3>
              <span className="post__span--dot">·</span>
              <h3 className="post__heading--time">
                {new Date(`${post.createdAt}`).getDate()} march
              </h3>
            </span>
            <MoreVertIcon
              className="post__icon--more icon__more"
              onClick={handleMoreActions}
            />
            {moreActionsOpen && (
              <ul
                className={`post__more--actions more__actions ${
                  moreActionsOpen && "show"
                }`}
              >
                <li
                  className="post__more--action action__more--item"
                  onClick={handleDeletePost}
                >
                  <DeleteIcon /> Delete
                </li>
              </ul>
            )}
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
              <li
                className="post__li--item action__item reswirk"
                onClick={handlePostReswirk}
              >
                <span className="post__span--action action__reswirks swirks">
                  <ShareOutlinedIcon className="post__icon--reswirk reswirk__icon post__icon" />
                  <span className="post__span--reswirkscount reswirks__count">
                    {postReswirks.length}
                  </span>
                </span>
              </li>
              <li
                className="post__li--item action__item like"
                onClick={handlePostLike}
              >
                <span className="post__span--action action__likes likes">
                  <FavoriteBorderOutlinedIcon
                    className={`post__icon--like like__icon post__icon ${
                      likedByUser && "liked"
                    }`}
                  />
                  <span className="post__span--likescount likes__count">
                    {postLikes.length}
                  </span>
                </span>
              </li>
              <li
                className="post__li--item action__item bookmark"
                onClick={handleBookmark}
              >
                <BookmarkBorderIcon
                  className={`post__icon--bookmark icon__bookamrk ${
                    bookamrkedByUser && "bookamrk__active"
                  } `}
                />
              </li>
            </ul>
          </section>
        </summary>
      </article>
    </a>
  );
};

export default Post;
