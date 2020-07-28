module.exports = {
  base: !process.env.CI || (process.env.CI && process.env.CI.toLowerCase() !== 'true') ? '/' : '/m16/',
  title: 'M16',
  description: 'Mongodb ODM for TypeScript.',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Connections', link: '/guides/connections.md' },
      { text: 'Documents', link: '/guides/documents.md' },
      { text: 'Models', link: '/guides/models.md' },
      {
        text: 'API',
        items: [
          { text: 'Connection', link: '/classes/connection.html' },
          { text: 'Document', link: '/classes/document.html' },
          { text: 'Model', link: '/classes/model.html' },
        ],
      },
      { text: 'Github', link: 'https://github.com/cervantes007/m16.git' }
    ],
    sidebar: 'auto',
  },
  plugins: ['@vuepress/medium-zoom', '@vuepress/back-to-top', 'vuepress-plugin-smooth-scroll'],
};
