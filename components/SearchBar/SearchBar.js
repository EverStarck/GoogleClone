// Styles
import { FormSearch } from "../../styles/stylesSearchFrame";
// Components
import Button from "./Button";
import Input from "./Input";

const SearchBar = ({ searchValue, setSearchValue, searchSubmit, inputH, buttonH }) => {
  return (
    <FormSearch onSubmit={searchSubmit}>
      <Input
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        inputH={inputH}
      />
      <Button buttonH={buttonH}/>
    </FormSearch>
  );
};

export default SearchBar;
