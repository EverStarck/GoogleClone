import { useContext } from "react";
import { NextSeo } from "next-seo";

import { ApiDataContext } from "../../context/ApiDataContext";

import HeaderFrame from "./Header/HeaderFrame";
import DownloadFrame from "./Main/Download/DownloadFrame";

const InfoFrame = () => {
  // Context
  const { data } = useContext(ApiDataContext);
  // const info = data.ytData[0].channelInfo;

  const SEO = {
    title: `Banner and Avatar`,
    description: ` is family friendly?. See keywords, description and download banner and avatar profile picture`,
    openGraph: {
      title: `⬇ Banner and Avatar`,
      description: ` is family friendly?. See  keywordsdescription and download banner and avatar profile picture`,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
        <HeaderFrame />
      <DownloadFrame />
    </>
  );
};

export default InfoFrame;
