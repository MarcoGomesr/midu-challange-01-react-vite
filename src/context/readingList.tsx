import { createContext, useEffect, useReducer, type ReactNode } from 'react'
import { booksInitialState, booksReducer } from '../store/reducer/readingList'
import { type Book } from '../types'
import { READING_LIST_ACTION_TYPES } from '../utils/consts/readingList'

interface readingListContextProps {
  // Define the properties and their types here
  readingListBooks: Book[]
  addToReadingList: (book: Book) => void
  removeFromReadingList: (book: Book) => void
  clearReadingList: () => void
}

export const ReadingListContext = createContext<readingListContextProps | undefined>(undefined)

function useReadingListReducer () {
  const [state, dispatch] = useReducer(booksReducer, booksInitialState)

  // Add an event listener for the storage event to update state
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'readingList' && event.newValue !== null) {
        // Parse the new value from localStorage
        const newValue = JSON.parse(event.newValue)

        // Dispatch an action to update the state
        dispatch({
          type: READING_LIST_ACTION_TYPES.UPDATE_READING_LIST as 'UPDATE_READING_LIST',
          payload: newValue
        })
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const addToReadingList = (book: Book) => {
    dispatch({
      type: READING_LIST_ACTION_TYPES.ADD_TO_READING_LIST as 'ADD_TO_READING_LIST',
      payload: book
    })
  }

  const removeFromReadingList = (book: Book) => {
    dispatch({
      type: READING_LIST_ACTION_TYPES.REMOVE_FROM_READING_LIST as 'REMOVE_FROM_READING_LIST',
      payload: book
    })
  }

  const clearReadingList = () => {
    dispatch({
      type: READING_LIST_ACTION_TYPES.CLEAR_READING_LIST as 'CLEAR_READING_LIST'
    })
  }

  return {
    state,
    addToReadingList,
    removeFromReadingList,
    clearReadingList,
    booksInitialState
  }
}

export default function ReadingListProvider ({
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
