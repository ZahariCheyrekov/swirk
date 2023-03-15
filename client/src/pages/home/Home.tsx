import { useEffect, useState } from "react";

import SideNavigation from "../../components/navigation/SideNavigation";
import Post from "../../components/post/Post";
import Search from "../../components/search/Search";
import Trends from "../../components/trends/Trends";

import { IPostCreated } from "../../interfaces/Post";
import { getPosts } from "../../api/globalAPI";

import "./Home.scss";

const Home = () => {
  const [posts, setPosts] = useState<IPostCreated[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const posts: IPostCreated[] = await getPosts();
    setPosts([...posts]);
  };

  return (
    <main className="main__home">
      <section className="home__section--nav nav">
        <SideNavigation />
      </section>
      <section className="home__posts">
        {posts.map((post: IPostCreated) => {
          return <Post key={post._id} post={post} />;
        })}
      </section>
      <section className="home__section--trends trends">
        <section className="search__section">
          <Search />
        </section>
        <Trends />
      </section>
    </main>
  );
};

export default Home;
