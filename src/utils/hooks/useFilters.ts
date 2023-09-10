import { useContext } from 'react'
import { FilterContext } from '../../context/filters'

import { type Book, type FiltersState } from '../../types'

interface FilterContextType {
  filters: FiltersState
  setFilters: (filters: FiltersState) => void
}

export function useFilters () {
  const { filters, setFilters } = useContext<FilterContextType>(FilterContext)

  const filterBooks = (books: Book[]) => {
    return books.filter((book) => {
      return (
        book.pages <= filters.minPages &&
        (filters.genres === '' || filters.genres === book.genre)
      )
    })
  }

  return {
    filters,
    setFilters,
    filterBooks
  }
}
