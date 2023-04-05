import { useContext, useEffect, useState } from "react";

import SideNavigation from "../../../components/navigation/SideNavigation";
import Search from "../../../components/search/SearchField";
import Trends from "../../../components/trends/Trends";
import Post from "../../../components/post/Post";

import { UserContext } from "../../../contexts/UserContext";
import { getBookmarks } from "../api/bookmark-api";
import { IPostCreated } from "../../../interfaces/Post";

import "./Bookmarks.scss";

const Bookmarks = () => {
  const { user } = useContext(UserContext);
  const [bookmarks, setBookmarks] = useState<IPostCreated[]>([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (user._id) {
        const fetchedBookmarks = await getBookmarks(user._id);
        setBookmarks(fetchedBookmarks);
      }
    };
    fetchBookmarks();
  }, [user?._id]);

  return (
    <main className="bookmarks__main">
      <section className="bookmarks__section--nav nav">
        <SideNavigation />
      </section>
      <section className="bookmarks__section main__section--center center__main--section">
        <div className="bookmarks__info">
          <h2 className="bookmarks__headin--name name">Bookmarks</h2>
          <h4 className="bookmarks__headin--name name swirks__number">
            @{user?.nickname}
          </h4>
        </div>
        {bookmarks.length > 0
          ? bookmarks.map((post: IPostCreated) => {
              return <Post key={post._id} post={post} />;
            })
          : "No bookmarks yet"}
      </section>
      <section></section>
      <section className="bookmarks__section--trends trends">
        <section className="search__section">
          <Search />
        </section>
        <Trends />
      </section>
    </main>
  );
};

export default Bookmarks;
