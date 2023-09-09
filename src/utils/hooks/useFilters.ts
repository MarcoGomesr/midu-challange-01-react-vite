import { useContext } from 'react'
import { FilterContext } from '../../context/filters'

import { Book } from '../../types'

export function useFilters() {
  const { filters, setFilters } = useContext(FilterContext)

  const filterBooks = (books: Book[]) => {
    return books.filter((book) => book.pages <= filters.minPages)
  }

  return {
    filters,
    setFilters,
    filterBooks
  }
}
