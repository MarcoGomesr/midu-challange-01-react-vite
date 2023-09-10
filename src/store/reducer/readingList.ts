import { READING_LIST_ACTION_TYPES } from '../../utils/consts/readingList'

export const booksInitialState =
  JSON.parse(window.localStorage.getItem('readingList')!) || []

// update localStorage with state for cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem('readingList', JSON.stringify(state))
}

export const booksReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case READING_LIST_ACTION_TYPES.ADD_TO_READING_LIST: {
      const { ISBN } = actionPayload

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

    case READING_LIST_ACTION_TYPES.REMOVE_FROM_READING_LIST: {
      const { ISBN } = actionPayload

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
