import React from "react";
import axios from "axios";

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
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          rel='preload'
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;800;900&family=Teko:wght@700&display=swap"
          as='style'
          onload="this.onload=null;this.rel='stylesheet'"
        />
        <style dangerouslySetInnerHTML={{
            __html: `body{margin:0;background-color:#1b114d;color:#fff;font-family:Orbitron,sans-serif;font-size:1.8rem;line-height:2.7rem;overflow-x:hidden;overflow-wrap:break-word}@media (min-width:768px){body{font-size:2.2rem;line-height:3rem}}@media (min-width:1200px){body{font-size:2.4rem;line-height:3.6rem}}.site-loader{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#000;overflow:hidden;z-index:6;opacity:1}.site-loader-inner{position:absolute;top:50%;left:50%;z-index:999999;transform:rotate(270deg)}b{position:absolute;left:50%;top:50%}b:before{content:"";display:block;padding:5px;padding-bottom:0;box-sizing:border-box;border-top-left-radius:1200px;border-top-right-radius:1200px;background:linear-gradient(to right,#000,#000),linear-gradient(to right,#000,#000,#0ff,#0cdbf5,#2592e1,#3564d5,#3b52d0,#3341ae,#1d1657,#1b114d);background-clip:content-box,padding-box}b:after{content:"";display:block;padding:5px;padding-top:0;box-sizing:border-box;border-bottom-left-radius:1200px;border-bottom-right-radius:1200px;background:linear-gradient(to right,#000,#000),linear-gradient(to right,#000,#000,#0ff,#0cdbf5,#2592e1,#3564d5,#3b52d0,#3341ae,#1d1657,#1b114d);background-clip:content-box,padding-box}b:nth-of-type(1){width:50px;height:50px;margin-left:-25px;margin-top:-25px;z-index:-1;-webkit-animation:rotate 4s ease-in-out -.1s infinite;animation:rotate 4s ease-in-out -.1s infinite}b:nth-of-type(1):after,b:nth-of-type(1):before{width:50px;height:25px}b:nth-of-type(2){width:100px;height:100px;margin-left:-50px;margin-top:-50px;z-index:-2;-webkit-animation:rotate 4s ease-in-out -.2s infinite;animation:rotate 4s ease-in-out -.2s infinite}b:nth-of-type(2):after,b:nth-of-type(2):before{width:100px;height:50px}b:nth-of-type(3){width:150px;height:150px;margin-left:-75px;margin-top:-75px;z-index:-3;-webkit-animation:rotate 4s ease-in-out -.3s infinite;animation:rotate 4s ease-in-out -.3s infinite}b:nth-of-type(3):after,b:nth-of-type(3):before{width:150px;height:75px}b:nth-of-type(4){width:200px;height:200px;margin-left:-100px;margin-top:-100px;z-index:-4;-webkit-animation:rotate 4s ease-in-out -.4s infinite;animation:rotate 4s ease-in-out -.4s infinite}b:nth-of-type(4):after,b:nth-of-type(4):before{width:200px;height:100px}b:nth-of-type(5){width:250px;height:250px;margin-left:-125px;margin-top:-125px;z-index:-5;-webkit-animation:rotate 4s ease-in-out -.5s infinite;animation:rotate 4s ease-in-out -.5s infinite}b:nth-of-type(5):after,b:nth-of-type(5):before{width:250px;height:125px}b:nth-of-type(6){width:300px;height:300px;margin-left:-150px;margin-top:-150px;z-index:-6;-webkit-animation:rotate 4s ease-in-out -.6s infinite;animation:rotate 4s ease-in-out -.6s infinite}b:nth-of-type(6):after,b:nth-of-type(6):before{width:300px;height:150px}b:nth-of-type(7){width:350px;height:350px;margin-left:-175px;margin-top:-175px;z-index:-7;-webkit-animation:rotate 4s ease-in-out -.7s infinite;animation:rotate 4s ease-in-out -.7s infinite}b:nth-of-type(7):after,b:nth-of-type(7):before{width:350px;height:175px}b:nth-of-type(8){width:400px;height:400px;margin-left:-200px;margin-top:-200px;z-index:-8;-webkit-animation:rotate 4s ease-in-out -.8s infinite;animation:rotate 4s ease-in-out -.8s infinite}b:nth-of-type(8):after,b:nth-of-type(8):before{width:400px;height:200px}b:nth-of-type(9){width:450px;height:450px;margin-left:-225px;margin-top:-225px;z-index:-9;-webkit-animation:rotate 4s ease-in-out -.9s infinite;animation:rotate 4s ease-in-out -.9s infinite}b:nth-of-type(9):after,b:nth-of-type(9):before{width:450px;height:225px}b:nth-of-type(10){width:500px;height:500px;margin-left:-250px;margin-top:-250px;z-index:-10;-webkit-animation:rotate 4s ease-in-out -1s infinite;animation:rotate 4s ease-in-out -1s infinite}b:nth-of-type(10):after,b:nth-of-type(10):before{width:500px;height:250px}b:nth-of-type(11){width:550px;height:550px;margin-left:-275px;margin-top:-275px;z-index:-11;-webkit-animation:rotate 4s ease-in-out -1.1s infinite;animation:rotate 4s ease-in-out -1.1s infinite}b:nth-of-type(11):after,b:nth-of-type(11):before{width:550px;height:275px}b:nth-of-type(12){width:600px;height:600px;margin-left:-300px;margin-top:-300px;z-index:-12;-webkit-animation:rotate 4s ease-in-out -1.2s infinite;animation:rotate 4s ease-in-out -1.2s infinite}b:nth-of-type(12):after,b:nth-of-type(12):before{width:600px;height:300px}b:nth-of-type(13){width:650px;height:650px;margin-left:-325px;margin-top:-325px;z-index:-13;-webkit-animation:rotate 4s ease-in-out -1.3s infinite;animation:rotate 4s ease-in-out -1.3s infinite}b:nth-of-type(13):after,b:nth-of-type(13):before{width:650px;height:325px}b:nth-of-type(14){width:700px;height:700px;margin-left:-350px;margin-top:-350px;z-index:-14;-webkit-animation:rotate 4s ease-in-out -1.4s infinite;animation:rotate 4s ease-in-out -1.4s infinite}b:nth-of-type(14):after,b:nth-of-type(14):before{width:700px;height:350px}b:nth-of-type(15){width:750px;height:750px;margin-left:-375px;margin-top:-375px;z-index:-15;-webkit-animation:rotate 4s ease-in-out -1.5s infinite;animation:rotate 4s ease-in-out -1.5s infinite}b:nth-of-type(15):after,b:nth-of-type(15):before{width:750px;height:375px}b:nth-of-type(16){width:800px;height:800px;margin-left:-400px;margin-top:-400px;z-index:-16;-webkit-animation:rotate 4s ease-in-out -1.6s infinite;animation:rotate 4s ease-in-out -1.6s infinite}b:nth-of-type(16):after,b:nth-of-type(16):before{width:800px;height:400px}b:nth-of-type(17){width:850px;height:850px;margin-left:-425px;margin-top:-425px;z-index:-17;-webkit-animation:rotate 4s ease-in-out -1.7s infinite;animation:rotate 4s ease-in-out -1.7s infinite}b:nth-of-type(17):after,b:nth-of-type(17):before{width:850px;height:425px}b:nth-of-type(18){width:900px;height:900px;margin-left:-450px;margin-top:-450px;z-index:-18;-webkit-animation:rotate 4s ease-in-out -1.8s infinite;animation:rotate 4s ease-in-out -1.8s infinite}b:nth-of-type(18):after,b:nth-of-type(18):before{width:900px;height:450px}b:nth-of-type(19){width:950px;height:950px;margin-left:-475px;margin-top:-475px;z-index:-19;-webkit-animation:rotate 4s ease-in-out -1.9s infinite;animation:rotate 4s ease-in-out -1.9s infinite}b:nth-of-type(19):after,b:nth-of-type(19):before{width:950px;height:475px}b:nth-of-type(20){width:1000px;height:1000px;margin-left:-500px;margin-top:-500px;z-index:-20;-webkit-animation:rotate 4s ease-in-out -2s infinite;animation:rotate 4s ease-in-out -2s infinite}b:nth-of-type(20):after,b:nth-of-type(20):before{width:1000px;height:500px}@-webkit-keyframes rotate{25%{transform:rotate(360deg);transform-origin:center;-webkit-filter:hue-rotate(360deg)}100%,50%{transform:rotate(0);transform-origin:center;-webkit-filter:hue-rotate(0deg)}}@keyframes rotate{25%{transform:rotate(360deg);transform-origin:center;-webkit-filter:hue-rotate(360deg)}100%,50%{transform:rotate(0);transform-origin:center;-webkit-filter:hue-rotate(0deg)}}#site-header{position:relative;z-index:5;display:flex;align-items:center;text-align:center;padding:0 20px}#site-header.is-home{z-index: 7;flex-direction: column;}.logo{position:relative;display:block;width:100%;padding:32px 0 8px;color:transparent;font-family:Teko,sans-serif;font-size:7.2rem;line-height:1;text-shadow:0 0 24px transparent,0 0 12px transparent,0 0 6px transparent,0 0 3px transparent;transition:text-shadow 1s}.logo--loaded{text-shadow:0 0 24px #0cdbf5,0 0 12px #0cdbf5,0 0 6px #0cdbf5,0 0 3px #0cdbf5}.logo--loaded:hover{text-shadow:0 0 24px #ff0cb8,0 0 12px #ff0cb8,0 0 6px #ff0cb8,0 0 3px #ff0cb8}.logo--loaded:hover .logo__filter{-webkit-filter:drop-shadow(0px 0px 8px #ff0cb8) blur(3px);filter:drop-shadow(0px 0px 8px #ff0cb8) blur(3px)}@media (min-width:992px){.logo{display:inline;width:auto;padding:22px 0 0}}@media (min-width:1540px){.logo{font-size:9.8rem;padding:24px 0 0}}.is-home .logo{display:block;width:100%;padding:32px 0 0;font-size:7.2rem;line-height:.8;text-align:center}@media (min-width:768px){.is-home .logo{font-size:10.8rem}}@media (min-width:1200px){.is-home .logo{font-size:14.4rem}}.logo__shadow{position:absolute;z-index:-1;top:30px;left:calc(50% - 105.5px)}@media (min-width:992px){.logo__shadow{top:18px}}@media (min-width:1540px){.logo__shadow{top:20px;left:0}}.is-home .logo__shadow{top:37px}@media (min-width:768px){.is-home .logo__shadow{left:calc(50% - 159px)}}@media (min-width:1200px){.is-home .logo__shadow{top:42px;left:calc(50% - 212px)}}.logo__svg{width:212px;transition:all 1s}@media (min-width:1540px){.logo__svg{width:288px}}@media (min-width:768px){.is-home .logo__svg{width:318px}}@media (min-width:1200px){.is-home .logo__svg{width:440px}}.logo__filter{-webkit-filter:drop-shadow(0px 0px 8px #0CDBF5) blur(3px);filter:drop-shadow(0px 0px 8px #0CDBF5) blur(3px);transition:all 1s}.logo__letter{stroke-width:5px}@media (min-width:768px){.logo__letter{stroke-width:4px}}@media (min-width:1200px){.logo__letter{stroke-width:3px}}@media (min-width:1200px){.subtitle{margin-top:-8px}}#root{min-height:calc(100vh + 1px)}`,
          }}
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

    const animationsPage = pages.find(
      (page) => page.reactComponent === "AnimationsHolder"
    );
    const { data: animationProjects } = await axios.get(
      "https://mysite.labcat.nz/wp-json/wp/v2/animations?per_page=99"
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
        path: "/animations",
        template: "src/js/page-types/AnimationsHolder",
        getData: () => ({
          animationsPage,
          animationProjects,
        }),
        children: animationProjects.map((project) => ({
          path: `/${project.slug}`,
          template: "src/js/page-types/AnimationProject",
          getData: () => ({
            project,
          }),
        })),
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
