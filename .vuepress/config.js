module.exports = {
  base: !process.env.CI || (process.env.CI && process.env.CI.toLowerCase() !== 'true') ? '/' : '/m16/',
  title: 'M16',
  description: 'Mongodb ODM for TypeScript and JavaScript (ES2015+).',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Connections', link: '/guides/connections.md' },
      { text: 'BaseDocument', link: '/classes/BaseDocument.md' },
      { text: 'Github', link: 'https://github.com/cervantes007/m16.git' },
    ],
    sidebar: 'auto',
  },
  plugins: ['@vuepress/medium-zoom', '@vuepress/back-to-top', 'vuepress-plugin-smooth-scroll'],
};
