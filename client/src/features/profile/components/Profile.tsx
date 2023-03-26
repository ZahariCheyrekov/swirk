import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SideNavigation from "../../../components/navigation/SideNavigation";
import Search from "../../../components/search/Search";
import Trends from "../../../components/trends/Trends";

import dummyData from "./dummy.json";
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
} from "../api/user-api";
import { getUserId } from "../../../services/localStorage";

import "./Profile.scss";

const Profile = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, setUser] = useState<IUserInStorage>({
    fullName: "",
    nickname: "",
    email: "",
    _id: "",
    token: "",
    profilePicture: "",
  });
  const [posts, setPosts] = useState<IPostCreated[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const userFetched = await getUserData("zaharicheyrekov");
      setUser(userFetched);
      fetchPosts(userFetched._id);
    };
    fetchUser();
  }, [pathname]);

  const fetchPosts = async (userId: string) => {
    const currentPage = pathname.split("/")[2];
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
  };

  const handleClick = (ev: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const itemValue =
      ev.currentTarget.firstChild?.textContent?.toLocaleLowerCase();

    if (itemValue !== "swirks") {
      navigate(`/${user.nickname}/${itemValue}`);
    } else {
      navigate(`/${user.nickname}`);
    }
  };

  const handleFollow = async () => {
    const userInStorage = getUserId();

    if (userInStorage) {
      await followUser(user._id, userInStorage);
    }
  };

  return (
    <main className="profile__main">
      <section className="profile__section--nav nav">
        <SideNavigation />
      </section>
      <section className="profile__section main__section--center center__main--section">
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
            {/* TODO: Fix button style and design */}
            <button onClick={handleFollow}>Follow</button>
            <button className="profile__button--edit edit__button">
              Edit profile
            </button>
          </div>
          <div className="profile__wrapper--info user__info">
            <h2 className="profile__heading--name name">{dummyData.name}</h2>
            <h3 className="profile__heading--nickname nickname">
              @{dummyData.nickname}
            </h3>
            <p className="profile__paragrpah--bio bio">{dummyData.bio}</p>
            <div className="profile__wrapper--following wrapper__following">
              <h4 className="profile__heading--followers heading__followers">
                {dummyData.followers.length}{" "}
                <span className="followers__text">Followers</span>
              </h4>
              <h4 className="profile__heading--following heading__following">
                {dummyData.following.length}{" "}
                <span className="following__text">Following</span>
              </h4>
            </div>
          </div>
        </section>
        <ul className="profile__list--timelines timelines">
          <li className="profile__li--timeline timeline" onClick={handleClick}>
            <h3 className="profile__heading--timelin timeline__text">Swirks</h3>
          </li>
          <li className="profile__li--timeline timeline" onClick={handleClick}>
            <h3 className="profile__heading--timelin timeline__text">Likes</h3>
          </li>
          <li className="profile__li--timeline timeline" onClick={handleClick}>
            <h3 className="profile__heading--timelin timeline__text">
              Comments
            </h3>
          </li>
          <li className="profile__li--timeline timeline" onClick={handleClick}>
            <h3 className="profile__heading--timelin timeline__text">Shares</h3>
          </li>
        </ul>
        <section className="profile__section--posts">
          {posts.map((post: IPostCreated) => {
            return <Post key={post._id} post={post} />;
          })}
        </section>
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
