import { useContext } from "react";
import styled from "@emotion/styled";

import { ApiDataContext } from "../../../context/ApiDataContext";

import { useRouter } from "next/router";

import TimeResults from "../TimeResults";
import ResultFrame from "./Result/ResultFrame";
import NoResults from "./NoResults";
import Error from "./../../Error";

const StyledResultsFrame = styled.main`
  margin-left: 180px;
  width: 652px;

  @media only screen and (max-width: 950px) {
    background-color: #f2f2f1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow-x: hidden;
    margin-left: 0px;
  }
`;

const ResultsFrame = ({ seconds }) => {
  // Context
  const { data } = useContext(ApiDataContext);
  const router = useRouter();
  return (
    <StyledResultsFrame>
      <TimeResults seconds={seconds} />
      {/* If the fetch doesn't work well, show error component */}
      {data.gData !== "Error, something goes wrong :(" ? (
        <>
          {!data.gData.length == 0 ? (
            <>
              {!router.query.q == "" ? (
                <>
                  {data.gData.map((dataItem) => (
                    <ResultFrame dataItem={dataItem} key={dataItem.id} />
                  ))}
                </>
              ) : null}
            </>
          ) : (
            <NoResults />
          )}
        </>
      ) : (
        <Error errorText="Error, something goes wrong :(" />
      )}
    </StyledResultsFrame>
  );
};

export default ResultsFrame;
