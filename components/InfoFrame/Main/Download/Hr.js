import styled from "@emotion/styled";

const HrStyled = styled.hr`
  border: 0 none;
  height: 1px;
  background-color: rgba(2, 10, 20, .3);
  margin: 0;
`;

const Hr = () => {
  return <HrStyled />;
};

export default Hr;
