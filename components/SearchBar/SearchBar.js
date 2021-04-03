import { useContext } from "react";
import styled from "@emotion/styled";

import { ApiDataContext } from "../../context/ApiDataContext";

import Input from "./Input";
import ButtonFrame from "./ButtonFrame";

const FormSearch = styled.form`
  margin-top: ${(props) => (props.ready ? "0px" : "20px")};
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Button */
  span {
    display: none;
  }

  @media only screen and (min-width: 950px) {
    align-items: flex-start;
  }
`;

const SearchBar = ({ searchValue, setSearchValue, searchSubmit }) => {
  // Context
  const { data } = useContext(ApiDataContext);
  const { ready } = data;

  return (
    <FormSearch onSubmit={searchSubmit} ready={ready}>
      <Input searchValue={searchValue} setSearchValue={setSearchValue} />
      <ButtonFrame />
    </FormSearch>
  );
};

export default SearchBar;
