import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import InfoFrame from "../components/InfoFrame/InfoFrame";
import { ApiDataContext } from "../context/ApiDataContext";

import { fetcher } from "../services/fetchData";

const SearchResults = ({ q, dataFetch, seconds }) => {
  // Context
  const { data, setData } = useContext(ApiDataContext);
  const router = useRouter();

  // Mount the fetch data in the state
  useEffect(() => {
    setData({
      // ...data,
      gData: dataFetch,
      ready: true,
      loading: false,
    });
  }, [dataFetch]);

  // Avoid enter to this route if the query is ""
  function CheckQuery() {
    useEffect(() => {
      if (q === "") {
        router.push("/");
      }
    }, [q]);
    return <InfoFrame seconds={seconds} />;
  }

  return <CheckQuery />;
};

// This gets called on every request
export async function getServerSideProps({ query }) {
  // query from the url
  let q = query.q;
  let dataFetch = "";

  const timeStart = new Date().getTime();

  // If the url query is wrong, don't call the fectcher
  if (typeof q === "undefined" || q === "") {
    q = "";
  } else {
    // dataFetch = await fetcher(q);
    dataFetch = q;
  }

  const timeEnd = new Date().getTime();
  const time = timeEnd - timeStart;
  const seconds = (time % 60000) / 1000;
  // Pass data to the page via props
  return { props: { q, dataFetch, seconds } };
}

export default SearchResults;
