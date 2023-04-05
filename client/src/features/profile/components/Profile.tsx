import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import SideNavigation from "../../../components/navigation/SideNavigation";
import Search from "../../../components/search/SearchField";
import Trends from "../../../components/trends/Trends";

import defaultPhoto from "../../../assets/default-photo.png";
import Post from "../../../components/post/Post";
import { IPostCreated } from "../../../interfaces/Post";
import { IUserInStorage } from "../../../interfaces/User";
import {
  getCreatedPosts,
  getLikedPosts,
  getUserData,
  getCommentedPosts,
  getReswirkedPosts,
  followUser,
  unfollowUser,
} from "../api/user-api";
import { UserContext } from "../../../contexts/UserContext";

import "./Profile.scss";

const Profile = () => {
  const navigate = useNavigate();
  const { user: userInContext } = useContext(UserContext);
  const { nickname } = useParams();
  const { pathname } = useLocation();
  const [user, setUser] = useState<IUserInStorage>();
  const [posts, setPosts] = useState<IPostCreated[]>([]);
  const [isAuthor, setIsAuthor] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = useCallback(
    async (userId: string) => {
      const currentPage = pathname.split("/")[3];
      let fetchedPosts;

      switch (currentPage) {
        case "likes":
          fetchedPosts = await getLikedPosts(userId);
          break;
        case "comments":
          fetchedPosts = await getCommentedPosts(userId);
          break;
        case "shares":
          fetchedPosts = await getReswirkedPosts(userId);
          break;
        default:
          fetchedPosts = await getCreatedPosts(userId);
          break;
      }

      setPosts(fetchedPosts);
    },
    [pathname]
  );

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const userFetched = await getUserData(nickname);
      setUser(userFetched);
      setIsAuthor(userFetched._id === userInContext._id);
      setFollowers(userFetched.followers.length);
      setIsFollowing(userFetched.followers.includes(userInContext._id));
      fetchPosts(userFetched._id);
      setIsLoading(false);
    };
    fetchUser();
  }, [userInContext._id, nickname, fetchPosts]);

  const handleClick = useMemo(
    () => (ev: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const itemValue =
        ev.currentTarget.firstChild?.textContent?.toLocaleLowerCase();

      if (itemValue !== "swirks") {
        navigate(`/profile/${user?.nickname}/${itemValue}`);
      } else {
        navigate(`/profile/${user?.nickname}`);
      }
    },
    [navigate, user?.nickname]
  );

  const handleProfileAction = async () => {
    if (user) {
      setIsFollowing(!isFollowing);
      setFollowers((prevState) => prevState + (isFollowing ? -1 : 1));

      if (isFollowing) {
        unfollowUser(user._id, userInContext._id);
      } else {
        followUser(user._id, userInContext._id);
      }
    }
  };

  return (
    <>
      {user && !isLoading && (
        <main className="profile__main">
          <section className="profile__section--nav nav">
            <SideNavigation />
          </section>
          <section className="profile__section main__section--center center__main--section">
            <div className="profile__info">
              <h2 className="profile__headin--name name">{user.fullName}</h2>
              <h4 className="profile__headin--name name swirks__number">
                {user.createdPosts.length} Swirks
              </h4>
            </div>
            <article className="profile__article--image profile__images">
              <img
                src={user.coverPicture ? user.coverPicture : defaultPhoto}
                alt={`${user.fullName} Cover`}
                className="profile__cover"
              />
              <div className="profile__wrapper--img wrapper__img">
                <img
                  src={user.profilePicture ? user.profilePicture : defaultPhoto}
                  alt={user.fullName}
                  className="profile__img"
                />
              </div>
            </article>
            <section className="profile__section--content user__content">
              <div className="profile__wrapper--actions profile__actions">
                {isAuthor ? (
                  <button className="profile__button--edit edit__button">
                    Edit profile
                  </button>
                ) : (
                  <>
                    {isFollowing ? (
                      <button
                        className="profile__button--unfollow unfollow__button"
                        onClick={handleProfileAction}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        className="profile__button--follow follow__button"
                        onClick={handleProfileAction}
                      >
                        Follow
                      </button>
                    )}
                  </>
                )}
              </div>
              <div className="profile__wrapper--info user__info">
                <h2 className="profile__heading--name name">{user.fullName}</h2>
                <h3 className="profile__heading--nickname nickname">
                  @{user.nickname}
                </h3>
                <p className="profile__paragrpah--bio bio">{user.bio}</p>
                <div className="profile__wrapper--following wrapper__following">
                  <h4 className="profile__heading--followers heading__followers">
                    {followers}{" "}
                    <span className="followers__text">Followers</span>
                  </h4>
                  <h4 className="profile__heading--following heading__following">
                    {user.following.length}{" "}
                    <span className="following__text">Following</span>
                  </h4>
                </div>
              </div>
            </section>
            <ul className="profile__list--timelines timelines">
              <li
                className="profile__li--timeline timeline"
                onClick={handleClick}
              >
                <h3 className="profile__heading--timelin timeline__text">
                  Swirks
                </h3>
              </li>
              <li
                className="profile__li--timeline timeline"
                onClick={handleClick}
              >
                <h3 className="profile__heading--timelin timeline__text">
                  Likes
                </h3>
              </li>
              <li
                className="profile__li--timeline timeline"
                onClick={handleClick}
              >
                <h3 className="profile__heading--timelin timeline__text">
                  Comments
                </h3>
              </li>
              <li
                className="profile__li--timeline timeline"
                onClick={handleClick}
              >
                <h3 className="profile__heading--timelin timeline__text">
                  Shares
                </h3>
              </li>
            </ul>
            <section className="profile__section--posts">
              {posts.length > 0 ? (
                posts.map((post: IPostCreated) => {
                  return <Post key={post._id} post={post} />;
                })
              ) : (
                <p className="profile__paragraph--noposts no__posts">
                  No posts yet
                </p>
              )}
            </section>
          </section>
          <section className="profile__section--trends trends">
            <section className="search__section">
              <Search />
            </section>
            <Trends />
          </section>
        </main>
      )}
    </>
  );
};

export default Profile;
