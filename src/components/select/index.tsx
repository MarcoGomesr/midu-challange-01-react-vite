import { Book } from '../../types'

interface Props {
  genreInit: Book['genre'][]
  onSelect: (value: string) => void
}
export default function Select({ genreInit, onSelect }: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor="genre" className="mb-1 text-sm font-medium text-white">
        Filtrar por género
      </label>
      <select onChange={(evt) => onSelect(evt.target.value)}>
        <option value="">Todos</option>
        {genreInit.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  )
}
