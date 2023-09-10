import { useId, type ChangeEvent } from 'react'
import { useFilters } from '../../utils/hooks/useFilters'

export default function Range () {
  const { filters, setFilters } = useFilters()
  const minPagesFilterId = useId()

  const handleChangeMinPages = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters(({
      ...filters,
      minPages: parseInt(event.target.value, 10) // Parse the value to an integer
    }))
  }

  return (
    <div>
      <div className="flex flex-col">
        <label
          htmlFor={minPagesFilterId}
          className="mb-1 text-sm font-medium text-white"
        >
          Numero de páginas
        </label>
        <input
          type="range"
          id={minPagesFilterId}
          className="ml-5"
          min="0"
          max="2000"
          onChange={handleChangeMinPages}
          value={filters.minPages}
        />
        <p className="text-sm text-gray-400">Máximo: {filters.minPages}</p>
      </div>
    </div>
  )
}
