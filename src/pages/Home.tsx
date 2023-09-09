import Books from '../components/Books'
import Filters from '../components/Filters'
import Footer from '../layout/footer'
import Header from '../layout/header'
import { getBooks } from '../services/getBooks'
import { useFilters } from '../utils/hooks/useFilters'

export default function Home() {
  const { filterBooks } = useFilters()
  const filteredBooks = filterBooks(getBooks)

  // const genreInit: Book['genre'][] = Array.from(
  //   new Set(books.map((book) => book.genre))
  // )
  // const [genreSelected, setGenreSelected] = useState<Book['genre']>('')
  // const [readList, setReadList] = useState<Book[]>([])
  // const [pagesFilter, setPagesFilter] = useState<Book['pages']>(0)
  // const [filteredMatches, setFilteredMatches] = useState<Book[]>([])

  // const handleBookClick = (bookISBN: Book['ISBN']) => {
  //   console.log(filters)
  //   const draft = readList.find((book) => book.ISBN === bookISBN)
  //     ? readList.filter((book) => book.ISBN !== bookISBN)
  //     : [...readList, matches.find((book) => book.ISBN === bookISBN)!]

  //   setReadList(draft)
  // }

  // const matches = useMemo(() => {
  //   if (genreSelected.length === 0) return books
  //   return books.filter((book) => book.genre === genreSelected)
  // }, [genreSelected])

  // const updatedFilteredMatches = useMemo(() => {
  //   return matches.filter((book) => book.pages <= pagesFilter)
  // }, [matches, pagesFilter])

  // useEffect(() => {
  //   setFilteredMatches(updatedFilteredMatches)
  // }, [matches, pagesFilter])

  // const maxPages = useMemo(() => {
  //   const pages = matches.map((book) => book.pages)

  //   const pageCount = pages.reduce((prevPage, page) => {
  //     return page > prevPage ? page : prevPage
  //   })

  //   setPagesFilter(pageCount)

  //   return pageCount
  // }, [matches])

  // const minPages = useMemo(() => {
  //   const pages = matches.map((book) => book.pages)
  //   return pages.reduce((prevPage, page) => {
  //     return page < prevPage ? page : prevPage
  //   })
  // }, [matches])

  return (
    <>
      <Header />
      <main>
        <Filters />
        <Books books={filteredBooks} />
      </main>
      <Footer />
    </>
  )
}
