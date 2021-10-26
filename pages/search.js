import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import InfoFrame from "../components/InfoFrame/InfoFrame";
import { ApiDataContext } from "../context/ApiDataContext";

import { fetcher } from "../services/fetchData";

const SearchResults = () => {
  const [seconds, setSeconds] = useState(0);
  // Context
  const { data, setData } = useContext(ApiDataContext);
  const router = useRouter();
  const query = router.query.q;

  async function fetchData(query) {
    const timeStart = new Date().getTime();
    const dataFetch = await fetcher(query);
    const timeEnd = new Date().getTime();
    const time = timeEnd - timeStart;
    setSeconds((time % 60000) / 1000);
    setData({
      ...data,
      gData: dataFetch,
      ready: true,
      loading: false,
    });
  }

  useEffect(() => {
    if (query === "") {
      router.push("/");
      return;
    }
    if (typeof query != "undefined") {
      fetchData(query);
    }
  }, [query]);

  return <InfoFrame seconds={seconds} />;
};

export default SearchResults;
