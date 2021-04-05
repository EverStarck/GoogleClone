import { Fragment } from "react";
import styled from "@emotion/styled";

import ExtraLinkFrame from "./Table/ExtraLinkFrame";
import ExtraLinksMobile from "./Table/ExtraLinksMobile";

const StyledTableFrame = styled.div`
  margin-left: 22px;
  margin-top: 3px;
  display: flex;
  flex-wrap: wrap;

  /* Styles for mobile table */
  @media only screen and (max-width: 641px) {
    margin-left: 0px;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TableFrame = ({ dataItem }) => {
  return (
    <StyledTableFrame>
      {dataItem.table.map((tableItem) => (
        <Fragment key={tableItem.id}>
          <ExtraLinkFrame tableItem={tableItem} />
          <ExtraLinksMobile tableItem={tableItem} />
        </Fragment>
      ))}
    </StyledTableFrame>
  );
};

export default TableFrame;
