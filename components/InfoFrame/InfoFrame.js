import { useContext } from "react";
import { NextSeo } from "next-seo";

import { ApiDataContext } from "../../context/ApiDataContext";

import HeaderFrame from "./Header/HeaderFrame";
import ResultsFrame from "./Results/ResultsFrame";
import Footer from "../SearchFrame/Footer";

const InfoFrame = ({seconds}) => {
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
      <ResultsFrame seconds={seconds} />
      <Footer />
    </>
  );
};

export default InfoFrame;
