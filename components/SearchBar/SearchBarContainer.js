import Router from "next/router";
import { useContext, useState } from "react";

// Context
import { ApiDataContext } from "../../context/ApiDataContext";

// Components
import SearchBar from "./SearchBar";

const SearchBarContainer = ({formAlign}) => {
  // Context
  const { data, setData } = useContext(ApiDataContext);

  const [searchValue, setSearchValue] = useState("");

  const searchSubmit = (e) => {
    e.preventDefault();

    setData({
      ...data,
      loading: true,
    });

    Router.push({
      pathname: "/search",
      query: { q: searchValue },
    });
  };

  return (
    <SearchBar
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchSubmit={searchSubmit}
      formAlign={formAlign}
    />
  );
};

export default SearchBarContainer;
