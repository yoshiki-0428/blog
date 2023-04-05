import { siteConfig } from './lib/site-config'

export default siteConfig({
  language: 'ja',

  // the site's root Notion page (required)
  rootNotionPageId: 'ac7a37a35f2b4f59bd6214de6c45ba71',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  asideNotionPageId: '7fdcde732e8e4dcb9b9d8659f422b872',

  // basic site info (required)
  name: '旅するエンジニアとその嫁',
  domain: '旅するエンジニアとその嫁.jp',
  author: 'TabiYome',

  // open graph metadata (optional)
  description: '旅するエンジニアとその嫁のパーソナルブログ',

  // social usernames (optional)
  twitter: null,
  github: null,
  linkedin: null,
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: 'https://transitivebullsh.it/page-cover.jpg',
  defaultPageCoverPosition: 1,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  pageUrlAdditions: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'ebb6de31b83b4f6e95eaa5b621f8a6f3'
    }
  ]
})
