import { useMemo, useState } from 'react'
import { getBooks } from '../services/getBooks'
import { Book } from '../types'

export default function Home() {
  const books: Book[] = getBooks

  const genreInit: Book['genre'][] = Array.from(
    new Set(books.map((book) => book.genre))
  )
  const [genreSelected, setGenreSelected] = useState<Book['genre']>('')

  const matches = useMemo(() => {
    if (genreSelected.length === 0) return books

    return books.filter((book) => book.genre === genreSelected)
  }, [genreSelected])

  return (
    <>
      <header className="m-auto w-full max-w-7xl p-4">
        <nav>📚 Libros</nav>
      </header>
      <main>
        <div className="m-auto max-w-7xl pb-4">
          <select onChange={(evt) => setGenreSelected(evt.target.value)}>
            <option value="">Todos</option>
            {genreInit.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <section className="m-auto grid max-w-7xl grid-cols-6  gap-5">
          <article className="col-span-4 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8">
            {matches.map((book) => (
              <div key={book.ISBN}>
                <picture>
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="aspect-[9/14] rounded-md object-cover shadow-md"
                  />
                </picture>
                <div>
                  <header>
                    <h2>{book.title}</h2>
                  </header>
                  <p>{book.synopsis}</p>
                </div>
              </div>
            ))}
          </article>
          <aside className="col-span-2 rounded-md bg-gray-800">
            <div>
              <picture>
                <img
                  src={''}
                  alt="test"
                  className="aspect-[9/14] rounded-md object-cover shadow-md"
                />
              </picture>
              <div>
                <header>
                  <h2>tituloe</h2>
                </header>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, asperiores.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <footer className="m-auto w-full">footer</footer>
    </>
  )
}
