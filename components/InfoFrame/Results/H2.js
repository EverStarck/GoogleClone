import styled from "@emotion/styled";

const H2Styled = styled.h2`
  font-size: ${(props) => props.fz};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fw};
  text-align: ${(props) => props.align};
`;

const H2 = ({
  h2,
  fz = "clamp(0.75rem, 2vw, 1.5rem)",
  align = "center",
  fw = "600",
  margin = "8px 0 24px 0",
}) => {
  return (
    <H2Styled fz={fz} align={align} fw={fw} margin={margin}>
      {h2}
    </H2Styled>
  );
};

export default H2;
