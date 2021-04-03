import AppMain from "../components/AppMain";

import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config.js";

export default function Home() {
  return (
    <>
      <DefaultSeo {...SEO} />

      <AppMain />
    </>
  );
}
