export default {
  title: "Google",
  description:
    "A Google Clone",
  canonical: "https://www.canonical.ie/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.googl.everstarck.com",
    site_name: "GoogleClone",
    images: [
      {
        url: "./yt2image.png",
        width: 800,
        height: 600,
        alt: "Image of the site YouTubeToImage.everstarck.com",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ],
  additionalMetaTags: [
    {
      name: "msapplication-TileColor",
      content: "#da532c",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "keywords",
      content:
        "Google, clone, google chrome",
    },
    {
      name: "google-site-verification",
      content: "ZJbTYzN7mCOFKfUVozRPtd02757Q7IFuxa8xU-66s48",
    },
  ],
  twitter: {
    handle: "@EverStarck",
    site: "@EverStarck",
    cardType: "summary_large_image",
  },
};
