import { useContext, useEffect } from "react";
import Image from "next/image";

import { ApiDataContext } from "../../context/ApiDataContext";

import { MainSearch } from "../../styles/stylesSearchFrame";

import SearchBarContainer from "../SearchBar/SearchBarContainer";
import Footer from "./Footer";
import GoogleLinks from "../GoogleLinks";

const SearchFrame = () => {
  // Context
  const { data, setData } = useContext(ApiDataContext);
  // Set ready and loading state by default
  useEffect(()=>{
    setData({
      ...data,
      ready: false,
      loading: false,
    });
  },[])

  return (
    <>
      <nav>
        <GoogleLinks />
      </nav>
      <MainSearch>
        <Image
          src="/googlelogo.webp"
          alt="Logo of Google company"
          width={272}
          height={92}
        />
        <section>
          <SearchBarContainer />
        </section>

        <Footer />
      </MainSearch>
    </>
  );
};

export default SearchFrame;
