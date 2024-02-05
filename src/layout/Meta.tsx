import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { AppConfig } from "../utils/AppConfig";

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600&family=Lato&family=Nunito+Sans:ital,wght@0,400;1,300;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/drxewzlaa/image/upload/v1691116991/playard_social_final_qwnnnh.png"
        />
        <meta property="twitter:title" content="Playard Indonesia" />
        <meta
          property="twitter:description"
          content="Platform Terbaik Mencari Lobi Main Basket"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/drxewzlaa/image/upload/v1691116991/playard_social_final_qwnnnh.png"
        />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
