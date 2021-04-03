import { useContext, useEffect } from "react";
import InfoFrame from "../components/InfoFrame/InfoFrame";
import { ApiDataContext } from "../context/ApiDataContext";

import { fetcher } from "../services/fetchData";

const SearchResults = ({ q, dataFetch }) => {
  // Context
  const { data, setData } = useContext(ApiDataContext);
  // Mount the fetch data in the state
  useEffect(() => {
    setData({
      // ...data,
      gData: dataFetch,
      ready: true,
      loading: false,
    });
  }, []);
  console.log(data);

  return <InfoFrame />;
};

// This gets called on every request
export async function getServerSideProps({ query }) {
  // query from the url
  const q = query.q;
  // let dataFetch = await fetcher(q);
  let dataFetch = q;

  // Pass data to the page via props
  return { props: { q, dataFetch } };
}

export default SearchResults;
