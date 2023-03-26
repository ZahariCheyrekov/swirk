import { useEffect, useState } from "react";
import SideNavigation from "../../../components/navigation/SideNavigation";
import Search from "../../../components/search/Search";
import Trends from "../../../components/trends/Trends";
import Post from "../../../components/post/Post";

import dummyData from "../dummy.json";
import { getBookmarks } from "../api/bookmark-api";
import { getUser } from "../../../services/localStorage";
import { IPostCreated } from "../../../interfaces/Post";

import "./Bookmarks.scss";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<IPostCreated[]>([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const user = getUser();
      const fetchedBookmarks = await getBookmarks(user?._id);
      setBookmarks(fetchedBookmarks);
    };
    fetchBookmarks();
  }, []);

  return (
    <main className="bookmarks__main">
      <section className="bookmarks__section--nav nav">
        <SideNavigation />
      </section>
      <section className="bookmarks__section main__section--center center__main--section">
        <div className="bookmarks__info">
          <h2 className="bookmarks__headin--name name">Bookmarks</h2>
          <h4 className="bookmarks__headin--name name swirks__number">
            @{dummyData.nickname}
          </h4>
        </div>
        {bookmarks.map((post: IPostCreated) => {
          return <Post key={post._id} post={post} />;
        })}
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
