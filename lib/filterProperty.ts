import { ExtendedRecordMap } from 'notion-types'
import { getPageProperty } from 'notion-utils'

export const filterCheckbox = (
  recordMap: ExtendedRecordMap,
  filterPropertyName = 'Public'
) => {
  const keys = Object.keys(recordMap?.block || {})
  for (const key of keys) {
    const block = recordMap?.block?.[key]?.value
    const checkbox = getPageProperty<boolean | null>(
      filterPropertyName,
      block,
      recordMap
    )
    if (block?.type === 'page' && checkbox === false) {
      delete recordMap.block[key]
    }
  }
  return recordMap
}
