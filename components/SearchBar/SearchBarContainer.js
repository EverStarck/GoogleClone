import { useContext, useState } from "react";
import { fetcher } from "../../services/fetchData";

// Context
import { ApiDataContext } from "../../context/ApiDataContext";

// Components
import Error from "../Error";
import SearchBar from "./SearchBar";

const SearchBarContainer = ({ inputH, buttonH }) => {
  // Context
  const { data, setData } = useContext(ApiDataContext);

  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);

  const searchSubmit = (e) => {
    e.preventDefault();
    // Reset the state
    setError(false);
    if (!error) {
      setData({
        ...data,
        ready: false,
        loading: true,
      });

      fetcher(searchValue).then((data) => {
        setData({
          gData: [data],
          ready: true,
          loading: false,
        });
      });
    }
  };

  return (
    <SearchBar
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchSubmit={searchSubmit}
      inputH={inputH}
      buttonH={buttonH}
    />
  );
};

export default SearchBarContainer;
