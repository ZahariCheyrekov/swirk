import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import "./SearchField.scss";

const SearchField = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(ev.target.value.trim());
  };

  const handleSubmit = (
    ev:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    ev.preventDefault();

    navigate(`/search/${searchValue}`);
  };

  return (
    <form
      method="POST"
      className="search__form"
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="search__input"
        placeholder="Search User..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <SearchIcon className="search__icon" onClick={handleSubmit} />
    </form>
  );
};

export default SearchField;
