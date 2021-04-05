import styled from "@emotion/styled";
import parse from "html-react-parser";

const StyledDescription = styled.div`
  /* max-width: 48em; */
  color: #4d5156;
  line-height: 1.58;
  word-wrap: break-word;
  /* width: 100%; */
  margin-top: 3px;
  p {
    display: ${(props) => (props.putDate ? "inline" : "inline-block")};
    margin: 0;
    font-size: 0.875rem;
    width: ${(props) => (props.putDate ? "100%" : "220px")};
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

const Description = ({
  dataItem,
  putDate = true,
  descText = parse(dataItem.description.desc),
}) => {
  return (
    <StyledDescription putDate={putDate}>
      {putDate && dataItem.description.date && (
        <span className="dateSpan">{dataItem.description.date}</span>
      )}
      <p>{descText}</p>
    </StyledDescription>
  );
};

export default Description;
