const seo = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: process.env.NEXTAUTH_URL || "https://myapp.co",
    site_name: process.env.NEXT_PUBLIC_SITE_NAME || "MyApp",
  },
  twitter: {
    handle: process.env.TWITTER_HANDLE || "@handle",
    site: process.env.TWITTER_SITE || "@site",
    cardType: process.env.TWITTER_CARD_TYPE || "summary_large_image",
  },
};

export default seo;
