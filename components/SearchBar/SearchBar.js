// Styles
import { FormSearch } from "../../styles/stylesSearchFrame";
// Components
import Input from "./Input";
import ButtonFrame from "./ButtonFrame";


const SearchBar = ({ searchValue, setSearchValue, searchSubmit, inputH, buttonH }) => {
  return (
    <FormSearch onSubmit={searchSubmit}>
      <Input
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        inputH={inputH}
      />
      <ButtonFrame/>
    </FormSearch>
  );
};

export default SearchBar;
