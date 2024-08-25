import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
{/*           <meta
            name="description"
            content=""
          />
          <meta property="og:site_name" content="discord logo & discord banner" />
          <meta
            property="og:description"
            content="illiyinDesigns.com is a company that sells graphic design services for Discord. They offer a variety of services, including profile pictures, banners, and avatars."
          />
          <meta property="og:title" content="" />
          <meta name="twitter:card" content="" />
          <meta name="twitter:title" content="" />
          <meta
            name="twitter:description"
            content=""
          /> */}

<meta name="description" content="Create stunning Discord logos in seconds with our easy-to-use logo maker. Customize colors, fonts, and designs to match your brand. Download high-resolution logos for free." />
<meta property="og:title" content="Discord Logo Maker" />
<meta property="og:description" content="Design your own unique Discord logo online. Choose from a variety of templates and customize them to your liking. Download your logo in various formats." />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Discord Logo Maker" />
<meta name="twitter:description" content="Create professional Discord logos without any design experience. Our intuitive tool makes it simple to design and download your custom logo." />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
