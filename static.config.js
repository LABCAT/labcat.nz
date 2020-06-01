import React from 'react';
import axios from 'axios'


const globalData = {
  title: 'LABCAT',
  subtitle: 'DIGITAL ARTIST',
  menu: ['creative-coding', 'audio']
}

export default {
  Document: (
    {
      Html,
      Head,
      Body,
      children,
      state: { siteData, renderMeta },
    }
  ) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@800;900&family=Teko:wght@700&display=swap" rel="stylesheet" /> 
      </Head>
      <div className="overlay overlay-fixed"></div>
      <Body>
        {children}
      </Body>
    </Html>
  ),
  getRoutes: async () => {
    const { data: pages } = await axios.get(
      'http://mysite.labcat.nz/wp-json/wp/v2/pages'
    );
    const home = pages.find(page => page.slug === 'home');
    const children = pages.filter(page => page.slug !== 'home');

    const creativeCodingPage = pages.find(page => page.reactComponent === 'CreativeCodingProjectsHolder');
    const { data: codeProjects } = await axios.get(
      'http://mysite.labcat.nz/wp-json/wp/v2/creative-coding'
    );

    const audioPage = pages.find(page => page.reactComponent === 'AudioProjectsHolder');
    const { data: audioProjects } = await axios.get(
      'http://mysite.labcat.nz/wp-json/wp/v2/audio-projects'
    );

    return [
      {
        path: '/',
        template: `src/js/page-types/Home`,
        getData: () => (
          {
            home,
            children,
          }
        )
      },
      {
        path: '/creative-coding',
        template: 'src/js/page-types/CreativeCodingProjectsHolder',
        getData: () => (
          {
            creativeCodingPage,
            codeProjects,
          }
        ),
        children: codeProjects.map(
          project => (
            {
              path: `/${project.slug}`,
              template: 'src/js/page-types/CreativeCodingProject',
              getData: () => (
                {
                  project,
                }
              ),
            }
          )
        ),
      },
      {
        path: '/audio',
        template: 'src/js/page-types/AudioProjectsHolder',
        getData: () => (
          {
            audioPage,
            audioProjects,
          }
        ),
        children: audioProjects.map(
          project => (
            {
              path: `/${project.slug}`,
              template: 'src/js/page-types/AudioProject',
              getData: () => (
                {
                  project,
                }
              ),
            }
          )
        ),
      },
    ]
  },
  plugins: [
    "react-static-plugin-sass", 
    'react-static-plugin-reach-router'
  ]
};