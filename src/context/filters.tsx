import { createContext, useState, type ReactNode } from 'react'
import { type FiltersState } from '../types'

export const FilterContext = createContext()

export function FilterProvider ({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FiltersState>({
    genres: '',
    minPages: 2000
  })

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
