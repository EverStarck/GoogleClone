import styled from "@emotion/styled";

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

const TimeResults = () => {
  return (
    <StyledTimeResults>
      About 1,460,000,000 results<nobr> (0.68 seconds)&nbsp;</nobr>
    </StyledTimeResults>
  );
};

export default TimeResults;
