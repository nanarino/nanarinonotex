import { defineConfig } from "vitepress";

export default defineConfig({
  // base: '/',
  base: '/nanarinonotex/',
  lang: 'zh-CN',
  title: 'nanarinotex',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nanarino' },
      { icon: 'twitter', link: 'https://twitter.com/kogawananari' }
    ],
    sidebar: {
      '/kotlin/': [{
        text: '语言特性',
        items: [
          { text: '安装kotlin', link: '/kotlin/' },
          { text: '基本语法', link: '/kotlin/basic' },
          { text: '函数', link: '/kotlin/function' },
          { text: '类', link: '/kotlin/class' },
          { text: '数据类型', link: '/kotlin/types' },
        ]
      }],
      '/dart/': [{
        text: '语言特性',
        items: [
          { text: '安装dart', link: '/dart/' },
          { text: '基本语法', link: '/dart/basic' },
          { text: '数据类型', link: '/dart/types' },
          { text: '函数', link: '/dart/function' },
          { text: '类', link: '/dart/class' },
          { text: '异步', link: '/dart/async' },
        ]
      }, {
        text: 'Flutter',
        items: [
          { text: '安装环境', link: '/dart/flutter/' },
        ]
      }],
      '/elixir/': [{
        text: '语言特性',
        items: [
          { text: '安装elixir', link: '/elixir/' },
          { text: '基本语法', link: '/elixir/basic' },
          { text: '数据类型', link: '/elixir/types' },
          { text: '函数', link: '/elixir/function' },
        ]
      }]
    },
    nav: [
      { text: 'dart', link: '/dart/', activeMatch: '/dart/' },
      { text: 'kotlin', link: '/kotlin/', activeMatch: '/kotlin/' },
      { text: 'elixir', link: '/elixir/', activeMatch: '/elixir/' },
    ],
  }
})