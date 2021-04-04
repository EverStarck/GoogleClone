import styled from "@emotion/styled";
import TimeResults from "../TimeResults";

import ResultFrame from "./Result/ResultFrame";

const StyledResultsFrame = styled.main`
  margin-left: 180px;
  width: 652px;

  @media only screen and (max-width: 950px) {
    background-color: #f2f2f1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow-x: hidden;
    margin-left: 0px;
  }
`;

const ResultsFrame = () => {
  return (
    <StyledResultsFrame>
      <TimeResults />
      <ResultFrame />
      <ResultFrame />
      <ResultFrame />
      <ResultFrame />
      <ResultFrame />
      <ResultFrame />
    </StyledResultsFrame>
  );
};

export default ResultsFrame;
