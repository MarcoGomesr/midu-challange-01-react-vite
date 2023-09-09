import { Book } from '../../types'

interface Props {
  books: Book[]
}
export default function Books({ books }: Props) {
  return (
    <section className="m-auto grid max-w-7xl grid-cols-6  gap-5">
      <article className="col-span-6 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8 md:col-span-4">
        {books.map((book) => (
          <div
            key={book.ISBN}
            className="block transform transition-all hover:-translate-y-2"
          >
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
              <p className="text-sm italic text-gray-600">{book.synopsis}</p>
              <p className="mt-3 text-sm text-gray-400">
                páginas: {book.pages}
              </p>
            </div>
          </div>
        ))}
      </article>
      {/* <ReadingList /> */}
    </section>
  )
}
