import { ReactNode, createContext, useState } from 'react'

export const FilterContext = createContext()

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState({
    genres: 'all',
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
