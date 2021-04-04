import styled from "@emotion/styled";
import parse from "html-react-parser";

const StyledDescription = styled.div`
  /* max-width: 48em; */
  color: #4d5156;
  line-height: 1.58;
  word-wrap: break-word;
  /* width: 100%; */
  margin-top: 5px;
  p {
    display: inline-block;
    margin: 0;
    font-size: 0.875rem;
    em {
      font-weight: bold;
      font-style: normal;
      color: var(--gray-nav);
    }
  }
  .dateSpan {
    color: #70757a;
    font-size: 0.875rem;
  }
`;

const Description = ({ dataItem }) => {
  return (
    <StyledDescription>
      {dataItem.description.date && (
        <span className="dateSpan">{dataItem.description.date}</span>
      )}
      <p>{parse(dataItem.description.desc)}</p>
    </StyledDescription>
  );
};

export default Description;
