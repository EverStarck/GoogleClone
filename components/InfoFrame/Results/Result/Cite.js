import styled from "@emotion/styled";

const StyledCite = styled.cite`
  /* font-size: clamp(.7rem, 2vw, 0.875rem); */
  line-height: 1.3;
  font-size: small;
  color: #202124;
  font-style: normal;
  span {
    color: var(--gray-nav);
    white-space: nowrap;
    font-size: clamp(0.75rem, 2vw, 0.813rem);
  }
`;

const Cite = ({dataItem}) => {
  return (
    <StyledCite>
      {dataItem.cite.big}
      <span>{dataItem.cite.small}</span>
    </StyledCite>
  );
};

export default Cite;
