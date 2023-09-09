import { getBooks } from '../../services/getBooks'
import { Book } from '../../types'
import Select from '../Select'

export default function Filters() {
  const books = getBooks

  const genreInit: Book['genre'][] = Array.from(
    new Set(books.map((book) => book.genre))
  )
  return (
    <div className="m-auto flex max-w-7xl flex-row items-start justify-start gap-5 pb-4 align-top">
      <Select genreInit={genreInit} />
      {/* <Range /> */}
    </div>
  )
}
