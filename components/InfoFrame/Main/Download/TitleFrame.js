import styled from "@emotion/styled";
import ChannelInfo from "../ChannelInfo/ChannelInfo";

import DownloadButton from "./DownloadButton";
import H3 from "./H3";
import Hr from "./Hr";
import QualityButton from "./QualityButton";

const TitleFrameStyled = styled.div`
  width: 100%;
  .QualityDownText {
    width: 100%;
    display: flex;
    justify-content: space-between;
    p {
      margin: 8px 0;
      font-weight: 500;
      font-size: clamp(0.75rem, 3vw, 1.125rem);
    }
  }
  .ButtonsArea {
    display: flex;
    justify-content: space-between;
  }
`;

const TitleFrame = ({ urlSelected, setUrlSelected, h3, isBannerSelect }) => {
  return (
    <TitleFrameStyled>
      <H3 h3={h3} />
      <Hr />
      <div className="QualityDownText">
        <p>Quality</p>
        <p>Download</p>
      </div>
      <Hr />

      <div className="ButtonsArea">
        <QualityButton
          isBannerSelect={isBannerSelect}
          urlSelected={urlSelected}
          setUrlSelected={setUrlSelected}
        />
        <DownloadButton
          urlSelected={urlSelected}
          isBannerSelect={isBannerSelect}
        />
      </div>
    </TitleFrameStyled>
  );
};

export default TitleFrame;
