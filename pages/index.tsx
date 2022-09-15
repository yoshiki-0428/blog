import * as React from 'react'
import { domain } from 'lib/config'
import { resolveNotionPage } from 'lib/resolve-notion-page'
import { NotionPage } from 'components'
import {ExtendedRecordMap} from "notion-types";
import omit from "lodash.omit";

const indexPropertyNameLowerCase = 'public'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)
    if ((props as any).recordMap) {
      const recordMap = (props as any).recordMap as ExtendedRecordMap
      const collection = Object.values(recordMap.collection)[0]?.value

      if (collection) {
        const galleryView = Object.values(recordMap.collection_view).find(
          (view) => view.value?.type === 'gallery'
        )?.value

        if (galleryView) {
          const galleryBlock = Object.values(recordMap.block).find(
            (block) =>
              block.value?.type === 'collection_view' &&
              block.value.view_ids?.includes(galleryView.id)
          )

          if (galleryBlock?.value) {
            recordMap.block = {
              [galleryBlock.value.id]: galleryBlock,
              ...omit(recordMap.block, [galleryBlock.value.id])
            }

            const propertyToFilter = Object.entries(collection.schema).find(
              (property) =>
                property[1]?.name?.toLowerCase() === indexPropertyNameLowerCase
            )
            const propertyToFilterId = propertyToFilter?.[0]

            if (propertyToFilterId) {
              const query =
                recordMap.collection_query[collection.id]?.[galleryView.id]
              const queryResults = query?.collection_group_results ?? query

              if (queryResults) {
                queryResults.blockIds = queryResults.blockIds.filter((id) => {
                  const block = recordMap.block[id]?.value
                  if (!block || !block.properties) {
                    return false
                  }

                  const value = block.properties[propertyToFilterId]?.[0]?.[0]
                  if (!value) {
                    return false
                  }

                  if (value[0] === 'Yes') return false

                  return true
                })
              }
            }
          }
        }
      }
    }

    return { props, revalidate: 60 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  return <NotionPage {...props} />
}
