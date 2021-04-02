import { useContext } from "react";
import { NextSeo } from "next-seo";

import { ApiDataContext } from "../../context/ApiDataContext";

import Header from "./Header/Header";
import DownloadFrame from "./Main/Download/DownloadFrame";

const InfoFrame = () => {
  // Context
  const { data } = useContext(ApiDataContext);
  const info = data.ytData[0].channelInfo;

  const SEO = {
    title: `⬇ ${info.title} Banner and Avatar`,
    description: `${info.title} is family friendly?. See ${info.title} keywords, description and download banner and avatar profile picture`,
    openGraph: {
      title: `⬇ ${info.title} Banner and Avatar`,
      description: `${info.title} is family friendly?. See ${info.title} keywordsdescription and download banner and avatar profile picture`,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Header />
      <DownloadFrame />
    </>
  );
};

export default InfoFrame;
