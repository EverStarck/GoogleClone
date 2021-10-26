import Router, { useRouter } from "next/router";
import { useContext, useState } from "react";

// Context
import { ApiDataContext } from "../../context/ApiDataContext";

// Components
import SearchBar from "./SearchBar";

const SearchBarContainer = ({ formAlign }) => {
  const [searchValue, setSearchValue] = useState("");
  // Context
  const { data, setData } = useContext(ApiDataContext);
  const router = useRouter();

  const searchSubmit = (e) => {
    e.preventDefault();
    if (searchValue != router.query.q) {
      setData({
        ...data,
        loading: true,
      });
      Router.push({
        pathname: "/search",
        query: { q: searchValue },
      });
    }
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
