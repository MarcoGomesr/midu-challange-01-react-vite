export default function ReadingList() {
  return (
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
  )
}
