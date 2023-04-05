import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SearchField from "../../../components/search/SearchField";
import SideNavigation from "../../../components/navigation/SideNavigation";
import Trends from "../../../components/trends/Trends";

import { getUsers } from "../api/search-api";

import "./Search.scss";

const Search = () => {
  const { nickname } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers(nickname);
      setSearchResults(users);
    };
    fetchUsers();
  }, [nickname]);

  return (
    <main className="search__main">
      <section className="search__section--nav nav">
        <SideNavigation />
      </section>
      <section className="search__section--sec">
        <section className="search__section--trends trends">
          <section className="search__section">
            <SearchField />

            {searchResults.length > 0 ? (
              <ul></ul>
            ) : (
              <h3>No users with such nickname</h3>
            )}
          </section>
        </section>
      </section>
      <section className="search__section--footer section__footer">
        <Trends />
      </section>
    </main>
  );
};

export default Search;
