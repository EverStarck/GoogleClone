import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { ApiDataContext } from "../../context/ApiDataContext";

import { useRouter } from "next/router";

const SearchBarFrame = styled.div`
  width: 582px;
  height: 46px;
  border: 1px solid var(--gray);
  border-radius: var(--radius);
  display: flex;
  &:hover {
    box-shadow: 0 1px 4px rgba(32, 33, 36, 0.28);
  }
  .searchInputFrame {
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 14px;
    margin-right: 8px;
    .searchIconSpan {
      padding-right: 13px;
      margin-top: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        fill: var(--gray2);
        width: 20px;
        height: 20px;
      }
    }
  }

  /* Mobile */
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const LabelInput = styled.label`
  width: 100%;
  span {
    display: none;
  }
  input[type="search"] {
    background-color: transparent;
    border: none;
    margin: 0;
    margin-top: 0px;
    padding: 0;
    color: rgba(0, 0, 0, 0.87);
    word-wrap: break-word;
    outline: none;
    display: flex;
    height: 34px;
    font-size: 16px;
    width: 100%;
    padding-left: ${(props) => (props.data.ready ? "10px" : "0px")};
  }
`;

const ButtonDelete = styled.div`
  display: ${(props) => (props.searchValue.length === 0 ? "none" : "block")};
  padding: 0 8px;
  cursor: pointer;
  span {
    display: block !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    svg {
      fill: var(--gray-delete);
    }
  }
`;

const SearchButton = styled.button`
  width: 44px;
  height: 44px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    display: block;
    height: 65%;
    width: 1px;
    position: absolute;
    left: 0;
    background-color: #dfe1e5;
  }
  span {
    height: 24px;
    width: 24px;
    line-height: 24px;
    display: block !important;
    svg {
      fill: #4285f4;
    }
  }
`;

const Input = ({ searchValue, setSearchValue }) => {
  // Context
  const { data } = useContext(ApiDataContext);
  const router = useRouter();

  const refreshInputValue = (e) => {
    setSearchValue(e.target.value);
  };

  const deleteSearchValue = () => {
    setSearchValue("");
  };

  // Add the url query to search bar input
  useEffect(() => {
    if (typeof router.query.q != "undefined") {
      setSearchValue(router.query.q);
    }
  }, []);

  return (
    <SearchBarFrame data={data}>
      <div className="searchInputFrame">
        {/* Hide search icon on results screen */}
        {!data.ready && (
          <span className="searchIconSpan">
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </span>
        )}
        <LabelInput data={data}>
          <span>Search</span>
          <input
            type="search"
            title="Search"
            aria-label="Search"
            value={searchValue}
            onChange={refreshInputValue}
            required
          />
        </LabelInput>
        <ButtonDelete
          aria-label="Delete"
          role="button"
          searchValue={searchValue}
          onClick={deleteSearchValue}
        >
          <span tabIndex="0" aria-label="Delete">
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </span>
        </ButtonDelete>
        {/* Show search button on results screen */}
        {data.ready && (
          <SearchButton aria-label="Google Search" type="submit">
            <span>
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </span>
          </SearchButton>
        )}
      </div>
    </SearchBarFrame>
  );
};

export default Input;
