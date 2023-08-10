import { getBooks } from '../services/getBooks'

export default function Home() {
  const books = getBooks
  return (
    <>
      <header className="m-auto w-full max-w-7xl p-4">
        <nav>📚 Libros</nav>
      </header>
      <main>
        <div className="m-auto max-w-7xl pb-4">
          <select name="" id="">
            <option value="Todos">Todos</option>
            <option value="Zombies">Zombies</option>
            <option value="Fantasía">Fantasía</option>
          </select>
        </div>
        <section className="m-auto grid max-w-7xl grid-cols-6  gap-5">
          <article className="col-span-4 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8">
            {books.map((book) => (
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
