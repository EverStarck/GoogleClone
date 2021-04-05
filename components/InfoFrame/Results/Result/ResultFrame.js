import styled from "@emotion/styled";

import Cite from "./Cite";
import Description from "./Description";
import Tittle from "./Tittle";
import TableFrame from "../TableFrame";

const StyledResultFrame = styled.div`
  margin-bottom: 28px;
  @media only screen and (max-width: 950px) {
    background-color: var(--white);
    margin-bottom: 8px;
    padding: 12px 16px;
  }

  @media only screen and (max-width: 440px) {
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      background-color: var(--white);
      width: 50px;
      height: 15px;
      top: 14px;
      right: 0;
    }
  }
`;

const ResultFrame = ({ dataItem }) => {
  return (
    <StyledResultFrame>
      <Cite dataItem={dataItem} />
      <Tittle dataItem={dataItem} />

      <Description dataItem={dataItem} />

      {/* Table */}
      {dataItem.table.length ? <TableFrame dataItem={dataItem} /> : null}
    </StyledResultFrame>
  );
};

export default ResultFrame;
