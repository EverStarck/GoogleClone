import styled from "@emotion/styled";
import Description from "../Result/Description";
import Tittle from "../Result/Tittle";

const StyledExtraLink = styled.div`
  width: 294px;
  margin-top: 5px;

  @media only screen and (max-width: 641px) {
    display: none;
  }
`;

const ExtraLinkFrame = ({ tableItem }) => {
  return (
    <StyledExtraLink>
      <Tittle url={tableItem.url} h3Text={tableItem.tittle} />
      <Description putDate={false} descText={tableItem.desc} />
    </StyledExtraLink>
  );
};

export default ExtraLinkFrame;
