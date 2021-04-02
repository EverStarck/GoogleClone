import { useContext } from "react";
import styled from "@emotion/styled";

import { ApiDataContext } from "../../../../context/ApiDataContext";
import ChannelInfo from "./ChannelInfo";

const ChannelInfoFrameStyled = styled.section`
  margin-top: 80px;

  @media only screen and (max-width: 500px) {
    margin-top: 32px;
  }
`;

const ChannelInfoFrame = () => {
  // Context
  const { data } = useContext(ApiDataContext);
  const channelInfo = data.ytData[0].channelInfo;
  const { description, keywords, isFamilySafe } = channelInfo;


  const desc = description === "" ? "This channel doesn't have description" : description;
  const key = keywords === "" ? "This channel doesn't have keywords" : keywords;
  const frienly = isFamilySafe ? "True" : "False";

  return (
    <ChannelInfoFrameStyled>
      <ChannelInfo mainText="Description:" pText={desc} />
      <ChannelInfo mainText="Keywords:" pText={key} />
      <ChannelInfo mainText="Is family friendly?:" pText={frienly} />
    </ChannelInfoFrameStyled>
  );
};

export default ChannelInfoFrame;
