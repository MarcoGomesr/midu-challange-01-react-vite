import { useEffect, useMemo, useState } from 'react'
import { getBooks } from '../services/getBooks'
import { Book } from '../types'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  const books: Book[] = getBooks

  const genreInit: Book['genre'][] = Array.from(
    new Set(books.map((book) => book.genre))
  )
  const [genreSelected, setGenreSelected] = useState<Book['genre']>('')
  const [readList, setReadList] = useState<Book[]>([])
  const [pagesFilter, setPagesFilter] = useState<Book['pages']>()

  const handleBookClick = (bookISBN: Book['ISBN']) => {
    const draft = readList.find((book) => book.ISBN === bookISBN)
      ? readList.filter((book) => book.ISBN !== bookISBN)
      : [...readList, matches.find((book) => book.ISBN === bookISBN) ?? []]

    setReadList(draft)
  }

  useEffect(() => {}, [readList])

  const matches = useMemo(() => {
    if (genreSelected.length === 0) return books

    return books.filter((book) => book.genre === genreSelected)
  }, [genreSelected])

  const maxPages = useMemo(() => {
    const pages = matches.map((book) => book.pages)

    const pageCount = pages.reduce((prevPage, page) => {
      return page > prevPage ? page : prevPage
    })
    setPagesFilter(pageCount)

    return pageCount
  }, [matches])

  const minPages = useMemo(() => {
    const pages = matches.map((book) => book.pages)
    return pages.reduce((prevPage, page) => {
      return page < prevPage ? page : prevPage
    })
  }, [matches])

  return (
    <>
      <Header />
      <main>
        <div className="m-auto flex max-w-7xl flex-row items-start justify-start gap-5 pb-4 align-top">
          <select onChange={(evt) => setGenreSelected(evt.target.value)}>
            <option value="">Todos</option>
            {genreInit.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <div>
            <input
              type="range"
              className="ml-5"
              min={minPages}
              max={maxPages}
              value={pagesFilter}
              onChange={(e) => setPagesFilter(parseInt(e.target.value))}
            />
            <p className="text-xs">Filtrar por paginas ({pagesFilter})</p>
          </div>
        </div>
        <section className="m-auto grid max-w-7xl grid-cols-6  gap-5">
          <article className="col-span-6 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8 md:col-span-4">
            {matches.map((book) => (
              <div key={book.ISBN}>
                <picture>
                  <img
                    src={book.cover}
                    alt={book.title}
                    onClick={() => handleBookClick(book.ISBN)}
                    className="aspect-[9/14] cursor-pointer rounded-md object-cover shadow-md"
                  />
                </picture>
                <div>
                  <header>
                    <h2 className="text my-3">{book.title}</h2>
                  </header>
                  <p className="text-sm italic text-gray-600">
                    {book.synopsis}
                  </p>
                </div>
              </div>
            ))}
          </article>
          <aside className="col-span-2 hidden content-start gap-4 rounded-md bg-gray-800 p-5 md:block">
            <header>
              <h2 className="text-2xl">Lista de lectura</h2>
              <p className="text-gray-600">
                {readList.length} en la lista de lectura
              </p>
            </header>
            <div className="grid grid-cols-2  gap-4 ">
              {readList.map((book) => (
                <figure className="group relative" key={book.ISBN}>
                  <img
                    key={book.ISBN}
                    src={book.cover}
                    alt={book.title}
                    className="aspect-[9/14] rounded-md object-cover shadow-md"
                  />
                  <figcaption className="absolute right-1 top-1 hidden cursor-pointer group-hover:block">
                    <button onClick={() => handleBookClick(book.ISBN)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6 rounded-full bg-gray-950 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </figcaption>
                </figure>
              ))}
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  )
}
