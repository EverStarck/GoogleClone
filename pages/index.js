import AppMain from "../components/AppMain";

import { DefaultSeo, NextSeo } from "next-seo";
import SEO from "../next-seo.config.js";

export default function Home() {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextSeo noindex={true} nofollow={true} />

      <AppMain />
    </>
  );
}
