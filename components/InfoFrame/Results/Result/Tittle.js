import styled from "@emotion/styled";
import H3 from "../H3";

const StyledTittle = styled.a`
  color: #1a0dab;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Tittle = ({ dataItem, fz, url = dataItem.url, h3Text = dataItem.tittle }) => {
  return (
    <StyledTittle href={url} target="_blank" rel="noopener noreferrer">
      <H3 fz={fz} h3={h3Text} paddingTop="0px"/>
    </StyledTittle>
  );
};

export default Tittle;
