import styled from "@emotion/styled";
import { useRouter } from "next/router";

const StyledNoResults = styled.section`
  position: relative;
  font-size: clamp(0.8rem, 3vw, 1rem);
  .yourSearchP {
    em {
      word-wrap: break-word;
      font-weight: bold;
      font-style: normal;
    }
  }
  .suggestionP {
    margin: 10px 0;
  }
  ul {
    margin-bottom: 32px;
    margin-left: 20px;
    padding: 0;
  }
  @media only screen and (max-width: 950px) {
    padding: 0 20px;
  }
`;

const NoResults = () => {
  const router = useRouter();

  return (
    <StyledNoResults class="card-section">
      <p className="yourSearchP" role="heading">
        Your search -<em> {router.query.q} das sdsada</em> - did not match any
        documents.
      </p>
      <p className="suggestionP">Suggestions:</p>
      <ul>
        <li>Make sure all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>Try more general keywords.</li>
        <li>Try fewer keywords.</li>
      </ul>
    </StyledNoResults>
  );
};

export default NoResults;
