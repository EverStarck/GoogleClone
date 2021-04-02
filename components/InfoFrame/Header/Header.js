import {useState } from "react";
import styled from "@emotion/styled";

import AvatarAndBanner from "./AvatarAndBanner";
import Nav from "./Nav";
import TextInfo from './TextInfo'


const HeaderInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Header = () => {
  const [bannerAndAvatar, setBannerAndAvatar] = useState({
    avatar: [],
    banner: [],
  });
  return (
    <>
      <Nav />
      <HeaderInfo>
        <AvatarAndBanner
          bannerAndAvatar={bannerAndAvatar}
          setBannerAndAvatar={setBannerAndAvatar}
        />
        <AvatarAndBanner
          bannerAndAvatar={bannerAndAvatar}
          setBannerAndAvatar={setBannerAndAvatar}
          isBanner={false}
        />
      </HeaderInfo>

      <TextInfo />
    </>
  );
};

export default Header;
