import { useState } from "react";
import styled from "@emotion/styled";

import AvatarAndBanner from "./AvatarAndBanner";
import Nav from "./Nav/Nav";
import TextInfo from "./TextInfo";
import Header from "./Header";

const HeaderInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HeaderFrame = () => {
  return (
    <>
      <Header/>
      <Nav />
      {/* <HeaderInfo>
        <AvatarAndBanner
          bannerAndAvatar={bannerAndAvatar}
          setBannerAndAvatar={setBannerAndAvatar}
        />
        <AvatarAndBanner
          bannerAndAvatar={bannerAndAvatar}
          setBannerAndAvatar={setBannerAndAvatar}
          isBanner={false}
        />
      </HeaderInfo> */}

      {/* <TextInfo /> */}
    </>
  );
};

export default HeaderFrame;
