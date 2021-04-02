import Link from "next/link";
import styled from "@emotion/styled";
import { useContext } from "react";
import { ApiDataContext } from "../../../context/ApiDataContext";
import H1 from "../../SearchFrame/H1";
import H2 from "../../SearchFrame/H2";

const TextInfoStyled = styled.article`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: var(--black);
    text-decoration: none;
  }
  /* Mobile */
  @media only screen and (max-width: 500px) {
    margin-top: 50px;
    h2 {
      margin-top: 2px;
    }
  }
`;

const TextInfo = () => {
  // Context
  const { data } = useContext(ApiDataContext);
  return (
    <TextInfoStyled>
      <a href={data.ytData[0].channelUrl} target="_blank" rel="noopener noreferrer">
        <H1
          h1={data.ytData[0].channelInfo.title}
          fz="clamp(1.125rem, 5.5vw, 2.5rem)"
        />
      </a>
      <H2
        h2={data.ytData[0].channelInfo.subs}
        fz="clamp(0.75rem, 2vw, 1.125rem)"
        fw="normal"
      />
    </TextInfoStyled>
  );
};

export default TextInfo;
