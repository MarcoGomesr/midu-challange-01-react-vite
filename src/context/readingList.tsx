import { ReactNode, createContext, useReducer } from 'react'
import { booksInitialState, booksReducer } from '../store/reducer/readingList'
import { READING_LIST_ACTION_TYPES } from '../utils/consts/readingList'

export const ReadingListContext = createContext()

function useReadingListReducer() {
  const [state, dispatch] = useReducer(booksReducer, booksInitialState)

  const addToReadingList = (book) =>
    dispatch({
      type: READING_LIST_ACTION_TYPES.ADD_TO_READING_LIST,
      payload: book
    })

  const removeFromReadingList = (book) =>
    dispatch({
      type: READING_LIST_ACTION_TYPES.REMOVE_FROM_READING_LIST,
      payload: book
    })

  const clearReadingList = () =>
    dispatch({
      type: READING_LIST_ACTION_TYPES.CLEAR_READING_LIST
    })

  return {
    state,
    addToReadingList,
    removeFromReadingList,
    clearReadingList,
    booksInitialState
  }
}

export default function ReadingListProvider({
  children
}: {
  children: ReactNode
}) {
  const { state, addToReadingList, removeFromReadingList, clearReadingList } =
    useReadingListReducer()

  return (
    <ReadingListContext.Provider
      value={{
        readingListBooks: state,
        addToReadingList,
        removeFromReadingList,
        clearReadingList
      }}
    >
      {children}
    </ReadingListContext.Provider>
  )
}
