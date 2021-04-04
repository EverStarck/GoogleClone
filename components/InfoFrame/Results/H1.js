import styled from "@emotion/styled";

const H1Styled = styled.h1`
  font-size: ${(props) => props.fz};
  margin: 0;
  text-align: center;
`;

const H1 = ({ h1, fz = "clamp(1.5rem, 5vw, 4.5rem)" }) => {
  return <H1Styled fz={fz}>{h1}</H1Styled>;
};

export default H1;
