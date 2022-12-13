import * as React from 'react'

import { Block, ExtendedRecordMap } from 'notion-types'
import { PageActions } from './PageActions'
import { PageSocial } from './PageSocial'
import { NotionRenderer } from 'react-notion-x'
import { getPageProperty } from 'notion-utils'

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
    const title = getPageProperty('Name', block, recordMap)
    if (!title) {
      return null
    }

    return <PageActions title={title as string} />
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
