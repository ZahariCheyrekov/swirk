import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import defaultPhoto from "../../../assets/default-photo.png";
import SearchField from "../../../components/search/SearchField";
import SideNavigation from "../../../components/navigation/SideNavigation";
import Trends from "../../../components/trends/Trends";

import { getUsers } from "../api/search-api";
import { IUserSearch } from "../../../interfaces/User";

import "./Search.scss";

const Search = () => {
  const navigate = useNavigate();
  const { nickname } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers(nickname);
      setSearchResults(users);
    };
    fetchUsers();
  }, [nickname]);

  const handleProfileClick = (currentNickname: string) => {
    navigate(`/profile/${currentNickname}`);
  };

  return (
    <main className="search__main">
      <section className="search__section--nav nav">
        <SideNavigation />
      </section>
      <section className="search__section--sec main__section--center center__main--section">
        <section className="search__section--trends trends">
          <section className="search__section">
            <SearchField />

            {searchResults.length > 0 ? (
              <ul className="search__list--results">
                {searchResults.map((user: IUserSearch) => {
                  return (
                    <li
                      onClick={() => handleProfileClick(user.nickname)}
                      key={user._id}
                      className="search__li--result search__result"
                    >
                      <img
                        src={
                          user.profilePicture !== ""
                            ? user.profilePicture
                            : defaultPhoto
                        }
                        alt={user.nickname}
                        className="search__user--picture user__picture"
                      />
                      <section className="search__user--content user__content">
                        <h4 className="search__user--heading user__nickname">
                          @{user.nickname}
                        </h4>
                        <div className="search__user--wrapper wrapper__following">
                          <span className="search__user--follows">
                            Followers {user.followers.length}
                          </span>
                          <span className="search__user--follows">
                            Following {user.following.length}
                          </span>
                        </div>
                      </section>
                    </li>
                  );
                })}
              </ul>
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
