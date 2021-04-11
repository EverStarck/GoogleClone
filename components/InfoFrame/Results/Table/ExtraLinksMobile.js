import styled from "@emotion/styled";
import Tittle from "../Result/Tittle";

const StyledMobileLinks = styled.div`
  margin-top: 5px;
  padding: 5px 8px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  /* margin left for all except the first */
  &:not(:nth-of-type(2)) {
    margin-left: 8px;
  }

  /* Hide on desktop version */
  @media only screen and (min-width: 641px) {
    display: none;
  }
`;

const ExtraLinksMobile = ({ tableItem }) => {
  return (
    <StyledMobileLinks>
      <Tittle fz="16px" url={tableItem.url} h3Text={tableItem.tittle} />
    </StyledMobileLinks>
  );
};

export default ExtraLinksMobile;
