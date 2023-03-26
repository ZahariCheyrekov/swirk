import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";

import SideNavigation from "../../../components/navigation/SideNavigation";
import Post from "../../../components/post/Post";
import Search from "../../../components/search/Search";
import Trends from "../../../components/trends/Trends";

import { IPostCreate, IPostCreated } from "../../../interfaces/Post";
import { IUserInStorage } from "../../../interfaces/User";
import { getPost, getPostComments, commentPost } from "../api/post-api";
import { getUserData } from "../../profile/api/user-api";

import "./PostDetails.scss";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<IPostCreated>();
  const [postComments, setPostComments] = useState<IPostCreated[]>([]);
  const [user, setUser] = useState<IUserInStorage>();
  const [postContent, setPostContent] = useState<string>("");
  const [postReplies, setPostReplies] = useState<IPostCreated[]>([]); // TODO: Get post reswirks
  const [imageSrc, setImageSrc] = useState<String | ArrayBuffer | null>("");

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPost(postId);
      setPost(fetchedPost);

      const comments = await getPostComments(postId, fetchedPost?.comments);
      setPostComments(comments);
    };
    fetchPost();

    const fetchUser = async () => {
      const userFetched = await getUserData("zaharicheyrekov");
      setUser(userFetched);
    };
    fetchUser();
  }, [postId]);

  const commentOnPost = async () => {
    if (user) {
      const postData: IPostCreate = {
        postContent: postContent,
        imageSrc: "",
        nickname: user.nickname,
        userId: user._id,
        userName: user.fullName,
        profilePicture: user.profilePicture || "",
      };

      const newComment = await commentPost(postData, postId, user?._id);
      setPostComments((comments) => [...comments, newComment]);
    }
  };

  const handleReplyChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(ev.currentTarget.value);
  };

  return (
    <main className="details__main">
      <section className="details__section--nav nav">
        <SideNavigation />
      </section>
      <section className="details__section">
        {post && (
          <>
            <Post post={post} />
            <div className="details__info">
              <h2 className="details__headin--name name">Swirk</h2>
            </div>
            <article className="details__article--reply article__reply">
              <div className="details__wrapper--image wrapper__img">
                <img
                  src={user?.profilePicture}
                  alt={post.userName}
                  className="details__img--user img__user"
                />
              </div>
              <section className="details__section--content content__section">
                <h3 className="details__heading--text heading__text">
                  Replying to @{post.nickname}
                </h3>
                <form className="details__form--reply form__reply">
                  <textarea
                    placeholder="Swirk your reply"
                    className="details__textarea--reply textarea__reply"
                    onChange={handleReplyChange}
                    value={postContent}
                  />
                </form>
                <span className="details__span--actions span__actions">
                  <PhotoSizeSelectActualOutlinedIcon className="details__icon--photo photo__icon" />
                  <button
                    className="details__button--reply button__element"
                    type="submit"
                    onClick={commentOnPost}
                  >
                    Reply
                  </button>
                </span>
              </section>
            </article>
          </>
        )}
        <section className="details__section--comments">
          {postComments.map((post: IPostCreated) => {
            return <Post post={post} key={post._id} />;
          })}
        </section>
      </section>
      <section className="details__section--trends trends hidden__trends">
        <section className="search__section">
          <Search />
        </section>
        <Trends />
      </section>
    </main>
  );
};

export default PostDetails;
