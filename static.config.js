import React from "react";
import axios from "axios";

const globalData = {
  title: "LABCAT",
  subtitle: "DIGITAL ARTIST",
  menu: ["creative-coding", "audio"],
};

//https://web.dev/add-manifest/
//https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs

export default {
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0C94B0" />
        <link rel="manifest" href="manifest.json" />
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="icon.svg" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;800;900&family=Teko:wght@700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KJ52WKS');`,
          }}
        />
      </Head>
      <div className="overlay overlay-fixed"></div>
      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async () => {
    const { data: pages } = await axios.get(
      "https://mysite.labcat.nz/wp-json/wp/v2/pages"
    );
    const home = pages.find((page) => page.slug === "home");
    const children = pages.filter((page) => page.slug !== "home");

    const creativeCodingPage = pages.find(
      (page) => page.reactComponent === "CreativeCodingProjectsHolder"
    );
    const { data: codeProjects } = await axios.get(
      "https://mysite.labcat.nz/wp-json/wp/v2/creative-coding"
    );

    const audioPage = pages.find(
      (page) => page.reactComponent === "AudioProjectsHolder"
    );
    const { data: audioProjects } = await axios.get(
      "https://mysite.labcat.nz/wp-json/wp/v2/audio-projects"
    );

    return [
      {
        path: "/",
        template: `src/js/page-types/Home`,
        getData: () => ({
          home,
          children,
        }),
      },
      {
        path: "/creative-coding",
        template: "src/js/page-types/CreativeCodingProjectsHolder",
        getData: () => ({
          creativeCodingPage,
          codeProjects,
        }),
        children: codeProjects.map((project) => ({
          path: `/${project.slug}`,
          template: "src/js/page-types/CreativeCodingProject",
          getData: () => ({
            project,
          }),
        })),
      },
      {
        path: "/audio",
        template: "src/js/page-types/AudioProjectsHolder",
        getData: () => ({
          audioPage,
          audioProjects,
        }),
        children: audioProjects.map((project) => ({
          path: `/${project.slug}`,
          template: "src/js/page-types/AudioProject",
          getData: () => ({
            project,
          }),
        })),
      },
    ];
  },
  plugins: ["react-static-plugin-sass", "react-static-plugin-reach-router"],
};
