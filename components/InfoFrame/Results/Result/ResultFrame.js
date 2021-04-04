import styled from "@emotion/styled";

import Cite from "./Cite";
import H3 from "../H3";
import Description from "./Description";

const StyledResultFrame = styled.div`
  margin-bottom: 28px;
  a {
    color: #1a0dab;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 950px) {
    background-color: var(--white);
    margin-bottom: 8px;
    padding: 12px 16px;
  }

  @media only screen and (max-width: 440px) {
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      background-color: var(--white);
      width: 50px;
      height: 15px;
      top: 14px;
      right: 0;
    }
  }
`;

const ResultFrame = ({ dataItem }) => {
  return (
    <StyledResultFrame>
      <Cite dataItem={dataItem} />
      <a href={dataItem.url} target="_blank" rel="noopener noreferrer">
        <H3 h3={dataItem.tittle} />
      </a>

      <Description dataItem={dataItem} />
    </StyledResultFrame>
  );
};

export default ResultFrame;
