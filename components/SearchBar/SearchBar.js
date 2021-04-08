import { useContext } from "react";
import styled from "@emotion/styled";

import { ApiDataContext } from "../../context/ApiDataContext";

import Input from "./Input";
import ButtonFrame from "./ButtonFrame";
import Loader from "../Loader";

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
    align-items: ${(props) => (props.formAlign ? "flex-start" : "center")};
  }
`;

const SearchBar = ({
  searchValue,
  setSearchValue,
  searchSubmit,
  formAlign = false,
}) => {
  // Context
  const { data } = useContext(ApiDataContext);
  const { ready } = data;

  return (
    <>
      <FormSearch onSubmit={searchSubmit} ready={ready} formAlign={formAlign}>
        {!data.loading ? (
          <Input searchValue={searchValue} setSearchValue={setSearchValue} />
        ) : <Loader/>}
        <ButtonFrame />
      </FormSearch>
    </>
  );
};

export default SearchBar;
