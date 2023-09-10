import Books from '../components/Books'
import Filters from '../components/Filters'
import ReadingListProvider from '../context/readingList'
import Footer from '../layout/footer'
import Header from '../layout/header'
import { getBooks } from '../services/getBooks'
import { useFilters } from '../utils/hooks/useFilters'

export default function Home () {
  const { filterBooks } = useFilters()
  const filteredBooks = filterBooks(getBooks)

  return (
    <>
      <Header />
      <main>
        <Filters />
        <ReadingListProvider>
          <Books books={filteredBooks} />
        </ReadingListProvider>
      </main>
      <Footer />
    </>
  )
}
