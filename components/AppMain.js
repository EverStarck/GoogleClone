import { useContext } from "react";
import { ApiDataContext } from "../context/ApiDataContext";

import SearchFrame from "./SearchFrame/SearchFrame";
import Error from "./Error";

const AppMain = () => {
  // Context
  const { data } = useContext(ApiDataContext);
  return (
    <>
      {data.gData[0] !== "Error, something goes wrong :(" ? (
        <SearchFrame />
      ) : (
        <Error errorText="Error, something goes wrong :(" />
      )}
    </>
  );
};

export default AppMain;
