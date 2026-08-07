import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const editUrl =
  'https://github.com/hyuabot-developers/hyuabot-developers.github.io/tree/main/';

const config: Config = {
  title: 'HYUabot Docs',
  tagline: 'HYUabot 사용설명서 및 체인지로그',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://hyuabot-developers.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'hyuabot-developers', // Usually your GitHub org/user name.
  projectName: 'hyuabot-developers.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en', 'zh-Hans', 'ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'changelog-android',
        routeBasePath: 'changelog/android',
        path: 'changelog/android',
        blogTitle: 'Android 체인지로그',
        blogSidebarTitle: 'Android 체인지로그',
        showReadingTime: false,
        feedOptions: {type: ['rss', 'atom']},
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'changelog-ios',
        routeBasePath: 'changelog/ios',
        path: 'changelog/ios',
        blogTitle: 'iOS 체인지로그',
        blogSidebarTitle: 'iOS 체인지로그',
        showReadingTime: false,
        feedOptions: {type: ['rss', 'atom']},
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'HYUabot Docs',
      logo: {
        alt: 'HYUabot Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'androidSidebar',
          position: 'left',
          label: 'Android',
        },
        {
          type: 'docSidebar',
          sidebarId: 'iosSidebar',
          position: 'left',
          label: 'iOS',
        },
        {
          to: '/changelog/android',
          label: 'Android 체인지로그',
          position: 'left',
        },
        {
          to: '/changelog/ios',
          label: 'iOS 체인지로그',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/hyuabot-developers',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Android', to: '/docs/android'},
            {label: 'iOS', to: '/docs/ios'},
          ],
        },
        {
          title: 'Changelog',
          items: [
            {label: 'Android', to: '/changelog/android'},
            {label: 'iOS', to: '/changelog/ios'},
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hyuabot-developers',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HYUabot Developers.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
