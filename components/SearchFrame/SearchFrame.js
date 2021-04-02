import { MainSearch } from "../../styles/stylesSearchFrame";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import Footer from "./Footer";
import Name from "./Name";

const SearchFrame = () => {
  return (
    <MainSearch>
      <Name h1='YouTube2Image' h2='The Tony Stark of the YouTube Downloaders!'/>

      <section>
        <SearchBarContainer/>
      </section>

      <Footer />
    </MainSearch>
  );
};

export default SearchFrame;
