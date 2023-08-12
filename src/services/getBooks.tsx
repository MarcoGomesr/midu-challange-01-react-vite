import data from '../data/books.json'
import { Book } from '../types.d'

export const getBooks: Book[] = data.library.map((data) => {
  return {
    title: data.book.title,
    author: data.book.author,
    cover: data.book.cover,
    genre: data.book.genre,
    ISBN: data.book.ISBN,
    pages: data.book.pages,
    synopsis: data.book.synopsis,
    year: data.book.year
  }
})
