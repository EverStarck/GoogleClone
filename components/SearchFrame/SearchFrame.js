import Image from "next/image";
import { MainSearch } from "../../styles/stylesSearchFrame";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import Footer from "./Footer";
const SearchFrame = () => {
  return (
    <MainSearch>
      <Image
        src="/googlelogo.webp"
        alt="Picture of the author"
        width={272}
        height={92}
      />
      <section>
        <SearchBarContainer />
      </section>

      <Footer />
    </MainSearch>
  );
};

export default SearchFrame;
