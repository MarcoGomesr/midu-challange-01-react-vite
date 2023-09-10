import { useContext } from 'react'
import { ReadingListContext } from '../../context/readingList'

export default function useReadingList () {
  const readingList = useContext(ReadingListContext)

  if (readingList === undefined) throw new Error('useReadingList is undefined')

  return readingList
}
