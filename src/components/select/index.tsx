import { ChangeEvent, useId } from 'react'
import { getBooks } from '../../services/getBooks'
import { Book } from '../../types'
import { useFilters } from '../../utils/hooks/useFilters'

export default function Select() {
  const books = getBooks

  const genreInit: Book['genre'][] = Array.from(
    new Set(books.map((book) => book.genre))
  )

  const genreId = useId()
  const { setFilters } = useFilters()

  const handleChangeGenre = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      genres: event.target.value
    }))
  }
  return (
    <div className="flex flex-col">
      <label htmlFor={genreId} className="mb-1 text-sm font-medium text-white">
        Filtrar por género
      </label>
      <select id={genreId} onChange={handleChangeGenre}>
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
