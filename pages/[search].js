import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import InfoFrame from "../components/InfoFrame/InfoFrame";
import { ApiDataContext } from "../context/ApiDataContext";

import { fetcher } from "../services/fetchData";

const SearchResults = ({ q, dataFetch }) => {
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
  }, []);
  console.log(data);

  // Avoid enter to this route if the query is ""
  function CheckQuery() {
    useEffect(() => {
      if (q === "") {
        router.push("/");
      }
    }, [q]);
    return <InfoFrame />;
  }

  return <CheckQuery />;
};

// This gets called on every request
export async function getServerSideProps({ query }) {
  // query from the url
  let q = query.q;
  let dataFetch = "";

  // If the url query is wrong, don't call the fectcher
  if (typeof q === "undefined" || q === "") {
    q = "";
  } else {
    // dataFetch = await fetcher(q);
    dataFetch = q
  }

  // Pass data to the page via props
  return { props: { q, dataFetch } };
}

export default SearchResults;
