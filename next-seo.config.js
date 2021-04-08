export default {
  title: "GoogleClone",
  noindex: true,
  nofollow: true,
  description:
    "Google Clone is a project made by EverStarck. This is not intended to be used for bad purposes, it was only made for practice.",
  canonical: "https://www.canonical.ie/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.googl.everstarck.com",
    site_name: "GoogleClone by EverStarck",
    images: [
      {
        url: "./glone.png",
        width: 800,
        height: 600,
        alt: "Image of the site googl.everstarck.com",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      sizes: "120x120",
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
      content: "Google, clone, google chrome, everstarck, starck",
    },
  ],
  twitter: {
    handle: "@EverStarck",
    site: "@EverStarck",
    cardType: "summary_large_image",
  },
};
