import styled from "@emotion/styled";
import { useContext } from "react";
import { ApiDataContext } from "../../context/ApiDataContext";

// Media querys in stylesSearchFrame.js
const LabelInput = styled.label`
  display: flex;
  flex-direction: column-reverse;
  cursor: text;
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  font-weight: 500;
  span {
    display: ${(props) => (props.data.ready ? "none" : "block")};
  }
  input[type="url"] {
    background-color: var(--real-white);
    border: 3px solid var(--real-white);
    border-radius: var(--radius) 0 0 var(--radius);
    padding-left: 24px;
    height: ${(props) => props.inputH};
    width: 682px;
    transition: 0.3s;
    font-size: 1rem;
    letter-spacing: 0.75px;
    color: var(--black);
    margin-bottom: 8px;
    &:hover,
    :focus {
      border: 3px solid var(--black);
    }
  }

  /* Mobile */
  @media only screen and (max-width: 500px) {
    width: 100%
  }
`;

const Input = ({ inputH = "64px", searchValue, setSearchValue }) => {
  // Context
  const { data } = useContext(ApiDataContext);

  const refreshInputValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <LabelInput data={data} inputH={inputH}>
      <span>Put here your link of the youtube channel</span>
      <input
        type="url"
        value={searchValue}
        placeholder="https://www.youtube.com/user/PewDiePie"
        onChange={refreshInputValue}
        required
      />
    </LabelInput>
  );
};

export default Input;
