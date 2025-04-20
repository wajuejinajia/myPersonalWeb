// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cai Jiale',
  tagline: 'Movier | Coder | Footballer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-personal-site.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // 禁用文档功能
        docs: false,
        // 禁用博客功能
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '蔡家乐',
        logo: {
          alt: '个人主页 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/wajuejinajia',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '联系方式',
            items: [
              {
                label: '邮箱',
                href: '1018831638@qq.com',
              },
            ],
          },
          {
            title: '社交媒体',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/wajuejinajia',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/%E5%AE%B6%E4%B9%90-%E8%94%A1-5b8130340/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 蔡佳乐的个人网站. 基于 Docusaurus 构建.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
