import styled from "@emotion/styled";
import { useContext } from "react";
import { ApiDataContext } from "../../context/ApiDataContext";

const StyledTimeResults = styled.div`
  height: 43px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: #70757a;
  font-size: clamp(0.65rem, 3.5vw, 0.875rem);
  margin-bottom: 6px;
  background-color: var(--white);

  @media only screen and (max-width: 950px) {
    padding-left: 16px;
  }
`;

const TimeResults = ({ seconds }) => {
  // Context
  const { data } = useContext(ApiDataContext);
  return (
    <StyledTimeResults>
      About {data.gData.length} results ({seconds} seconds)&nbsp;
    </StyledTimeResults>
  );
};

export default TimeResults;
