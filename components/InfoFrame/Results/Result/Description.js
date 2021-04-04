import styled from "@emotion/styled";

const StyledDescription = styled.div`
  /* max-width: 48em; */
  color: #4d5156;
  line-height: 1.58;
  word-wrap: break-word;
  /* width: 100%; */
  margin-top: 5px;
  p {
    margin: 0;
    font-size: 0.875rem;
    em {
      font-weight: bold;
      font-style: normal;
      color: var(--gray-nav);
    }
  }
`;

const Description = () => {
  return (
    <StyledDescription>
      <p>
        <em>Python</em> Tutorial ... <em>Python</em> is a programming language.{" "}
        <em>Python</em> can be used on a server to create web applications.
        Start learning <em>Python</em> now ». Learning by&nbsp;...
      </p>
    </StyledDescription>
  );
};

export default Description;
