import { ReactNode, createContext, useState } from 'react'

export const FilterContext = createContext()

interface FiltersState {
  genres: string
  minPages: number
}

export function FilterProvider({ children }: { children: ReactNode }) {
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
