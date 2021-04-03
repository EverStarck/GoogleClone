import styled from "@emotion/styled";

const StlyedBox = styled.div`
  padding: 16px 12px 12px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  color: ${props => props.colorText};
  border-bottom: ${props => props.blueBorderBottom ? "3px solid #1a73e8": "3px solid #ffff"};
  .navIconBox {
    height: 16px;
    width: 16px;
    margin-right: 5px;
    fill: var(--gray-nav);
  }
`;

const Box = ({blueBorderBottom=false, textNavBox, svg, colorText="var(--gray-nav)"}) => {
  return (
    <StlyedBox blueBorderBottom={blueBorderBottom} colorText={colorText}>
      <span className="navIconBox">
        {svg}
      </span>
      {textNavBox}
    </StlyedBox>
  );
};

export default Box;
