import styled from "@emotion/styled";

const H3Styled = styled.h3`
  font-size: ${(props) => props.fz};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fw};
  text-align: ${(props) => props.align};
  line-height: 1.3;
  padding-top: ${(props) => props.paddingTop};
`;

const H3 = ({
  h3,
  fz = "clamp(1.1rem, 3vw, 1.25rem)",
  align,
  fw = "400",
  margin="0px",
  paddingTop="4px"
}) => {
  return (
    <H3Styled fz={fz} align={align} fw={fw} margin={margin} paddingTop={paddingTop}>
      {h3}
    </H3Styled>
  );
};

export default H3;
