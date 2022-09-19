import { siteConfig } from './lib/site-config'

export default siteConfig({
  language: 'ja',

  // the site's root Notion page (required)
  rootNotionPageId: 'df0b51fe0eb04981aaa95c7e2a2280b4',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  asideNotionPageId: '7fdcde732e8e4dcb9b9d8659f422b872',

  // basic site info (required)
  name: 'engineer blog by yoshiki-0428',
  domain: 'tech-blog.yoshikiohashi.dev',
  author: 'Yoshiki',

  // open graph metadata (optional)
  description: '',

  // social usernames (optional)
  twitter: 'yoshiki__0428',
  github: 'yoshiki-0428',
  linkedin: null,

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: 'https://transitivebullsh.it/page-cover.jpg',
  defaultPageCoverPosition: 1,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

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
      pageId: 'e8560208a8b840fc8a4c1632fb7c0c1a'
    }
  ]
})
