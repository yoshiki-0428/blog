import * as React from 'react'

import { Block, ExtendedRecordMap } from 'notion-types'
import { getPageTweet } from '@/lib/get-page-tweet'
import { PageActions } from './PageActions'
import { PageSocial } from './PageSocial'
import { NotionRenderer } from 'react-notion-x'

export const PageAside: React.FC<{
  block: Block
  recordMap: ExtendedRecordMap
  asideRecordMap?: ExtendedRecordMap
  isBlogPost: boolean
}> = ({ block, recordMap, asideRecordMap, isBlogPost }) => {
  if (!block) {
    return null
  }

  // only display comments and page actions on blog post pages
  if (isBlogPost) {
    const tweet = getPageTweet(block, recordMap)
    if (!tweet) {
      return null
    }

    return <PageActions tweet={tweet} />
  }

  return (
    <div>
      <PageSocial />
      {asideRecordMap && (
        <NotionRenderer
          className='notion-aside-block'
          recordMap={asideRecordMap}
        />
      )}
    </div>
  )
}
