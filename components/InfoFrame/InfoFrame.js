import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import HeaderFrame from "./Header/HeaderFrame";
import ResultsFrame from "./Results/ResultsFrame";
import Footer from "../SearchFrame/Footer";

const InfoFrame = ({ seconds }) => {
  const router = useRouter();

  const SEO = {
    title: `${router.query.q} - Google Search`,
    description: `See all results of ${router.query.q}`,
    openGraph: {
      title: `${router.query.q} - Google Search`,
      description: `See all results of ${router.query.q}`,
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
