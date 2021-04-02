import Image from "next/image";
import { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { ApiDataContext } from "../../../context/ApiDataContext";

const BannerDiv = styled.div`
  z-index: 1;
  height: 300px;
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  /* Mobile */
  @media only screen and (max-width: 500px) {
    height: 100px;
    img {
      height: 100px;
    }
  }
`;

const AvatarDiv = styled.div`
  height: 260px;
  position: absolute;
  top: 65%;
  z-index: 2;
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  /* Mobile */
  @media only screen and (max-width: 500px) {
    height: 88px;
    width: 88px;
    top: 50%;
    img {
      height: 88px;
    }
  }
`;

const AvatarAndBanner = ({
  isBanner = true,
  bannerAndAvatar,
  setBannerAndAvatar,
}) => {
  // Context
  const { data } = useContext(ApiDataContext);

  let arrayWithBanner = data.ytData[0].banner;

  useEffect(() => {
    setBannerAndAvatar({
      ...bannerAndAvatar,
      avatar: [data.ytData[0].avatar[data.ytData[0].avatar.length - 1]],
      banner: [arrayWithBanner[arrayWithBanner.length - 1]],
    });
  }, []);

  return (
    <>
      {isBanner ? (
        <>
          {bannerAndAvatar.banner.length && (
            <BannerDiv>
              <Image
                src={bannerAndAvatar.banner[0].url}
                alt={`Banner of the youtuber called ${data.ytData[0].channelInfo.title}`}
                width={1920}
                height={300}
              />
            </BannerDiv>
          )}
        </>
      ) : (
        <>
          {bannerAndAvatar.banner.length && (
            <AvatarDiv>
              <Image
                src={bannerAndAvatar.avatar[0].url}
                alt={`Banner of the youtuber called ${data.ytData[0].channelInfo.title}`}
                width={200}
                height={200}
              />
            </AvatarDiv>
          )}
        </>
      )}
    </>
  );
};

export default AvatarAndBanner;
