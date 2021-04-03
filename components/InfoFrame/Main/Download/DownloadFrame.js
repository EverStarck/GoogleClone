import { useContext, useState } from "react";
import styled from "@emotion/styled";

import { ApiDataContext } from "../../../../context/ApiDataContext";

import TitleFrame from "./TitleFrame";
import ChannelInfoFrame from "../ChannelInfo/ChannelInfoFrame";

const DownloadFrameStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 64px 0 32px 0;
  .width90 {
    width: 60%;
    .items {
      display: flex;
      justify-content: space-between;
      column-gap: 32px;
    }
  }
  @media only screen and (max-width: 1158px) {
    .width90 {
      width: 70%;
    }
  }

  /* Just one item */
  @media only screen and (max-width: 920px) {
    margin: 24px 0;
    .width90 {
      width: 90%;
    }
    .items {
      flex-direction: column;
      row-gap: 32px;
    }
  }
`;

const DownloadFrame = () => {
  // Context
  const { data } = useContext(ApiDataContext);

  return (
    <DownloadFrameStyled>
      {/* <div className="width90">
        <div className="items">
          <TitleFrame
            h3="Banner"
            urlSelected={urlSelected}
            setUrlSelected={setUrlSelected}
          />
          <TitleFrame
            h3="Profile picture"
            isBannerSelect={false}
            urlSelected={urlSelected}
            setUrlSelected={setUrlSelected}
          />
        </div>

        <ChannelInfoFrame/>
      </div> */}
    </DownloadFrameStyled>
  );
};

export default DownloadFrame;
