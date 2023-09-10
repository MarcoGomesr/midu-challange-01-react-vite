import { type Book } from '../../types'
import { READING_LIST_ACTION_TYPES } from '../../utils/consts/readingList'

type ReadingListActionTypes =
  | { type: 'ADD_TO_READING_LIST', payload: Book }
  | { type: 'REMOVE_FROM_READING_LIST', payload: { ISBN: Book['ISBN'] } }
  | { type: 'CLEAR_READING_LIST', payload: null }
  | { type: 'UPDATE_READING_LIST', payload: Book[] }

export const booksInitialState =
  JSON.parse(window.localStorage.getItem('readingList') ?? '[]')

export const updateLocalStorage = (state: Book[]) => {
  window.localStorage.setItem('readingList', JSON.stringify(state))
}

export const booksReducer = (state: Book[], action: ReadingListActionTypes) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case READING_LIST_ACTION_TYPES.ADD_TO_READING_LIST: {
      const { ISBN } = actionPayload as { ISBN: Book['ISBN'] }

      const productInCartIndex = state.findIndex((item) => item.ISBN === ISBN)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)

        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload
        }
      ]

      updateLocalStorage(newState)
      return newState
    }
    case READING_LIST_ACTION_TYPES.UPDATE_READING_LIST: {
      return actionPayload as Book[]
    }

    case READING_LIST_ACTION_TYPES.REMOVE_FROM_READING_LIST: {
      const { ISBN } = actionPayload as { ISBN: Book['ISBN'] }

      const newState = state.filter((item) => item.ISBN !== ISBN)
      updateLocalStorage(newState)
      return newState
    }

    case READING_LIST_ACTION_TYPES.CLEAR_READING_LIST: {
      updateLocalStorage([])
      return []
    }
  }

  return state
}
