import { ReactNode, createContext } from 'react'

export const ReadingListContext = createContext()

// const initialState = window.localStorage.getItem('ReadingList') || []

function useReadingListReducer (){

  return {state, addToList, removeFromList, removeFromList, clearList, booksinitialState }
}

export default function readingListProvider({ children }: { children: ReactNode}) {

  const { state, addToList, removeFromList, removeFromList, clearList } = useReadingListReducer()


  return (
    <ReadingListContext.Provider value={{
      books,
      addToList,
      removeFromList
      clearList
    }}>
     { children} 
    </ReadingListContext.Provider>
  )
}
