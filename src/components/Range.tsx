import { useId } from 'react'

interface Props {
  minPages: number
  maxPages: number
  setPagesFilter: (value: number) => void
  pagesFilter: number
}

export default function Range({
  minPages,
  maxPages,
  setPagesFilter,
  pagesFilter
}: Props) {
  const labelRange = useId()
  return (
    <div>
      <div className="flex flex-col">
        <label
          htmlFor={labelRange}
          className="mb-1 text-sm font-medium text-white"
        >
          Numero de páginas
        </label>
        <input
          type="range"
          id={labelRange}
          className="ml-5"
          min={minPages}
          max={maxPages}
          value={pagesFilter}
          onChange={(e) => setPagesFilter(parseInt(e.target.value))}
        />
        <p className="text-sm text-gray-400">Máximo: {pagesFilter}</p>
      </div>
    </div>
  )
}
