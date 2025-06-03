import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Docs VitePress',
  base: '/docs-vitepress/',
  description: 'test deploy VitePress page',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CHANGELOG', link: '/CHANGELOG' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Test Report', link: '/lcov-report/' },
          { text: 'Code Coverage Report', link: '/test-results/jest/' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
