import styled from "@emotion/styled";

const H3Styled = styled.h3`
  font-size: ${(props) => props.fz};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fw};
  text-align: ${(props) => props.align};
`;

const H3 = ({
  h3,
  fz = "clamp(0.875rem, 5vw, 2rem)",
  align,
  fw = "600",
  margin="0px",
}) => {
  return (
    <H3Styled fz={fz} align={align} fw={fw} margin={margin}>
      {h3}
    </H3Styled>
  );
};

export default H3;
