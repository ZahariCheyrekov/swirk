import SearchIcon from "@mui/icons-material/Search";

import "./SearchField.scss";

const SearchField = () => {
  return (
    <form method="POST" className="search__form" role="search">
      <input type="text" className="search__input" placeholder="Search Swirk" />
      <SearchIcon className="search__icon" />
    </form>
  );
};

export default SearchField;
