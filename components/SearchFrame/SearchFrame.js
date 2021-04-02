import Image from "next/image";

import { MainSearch } from "../../styles/stylesSearchFrame";

import SearchBarContainer from "../SearchBar/SearchBarContainer";
import Footer from "./Footer";
import Nav from "./Nav";

const SearchFrame = () => {
  return (
    <>
    <Nav/>
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
