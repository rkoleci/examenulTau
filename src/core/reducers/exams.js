import types from '../../config/types'

export function searchRequest(state = {
  fetching: false,
  fetched: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.SEARCH_REQUEST_START:
      return { ...state, fetching: true, error: '', errored: false }
    case types.SEARCH_REQUEST_SUCCESS:
      return {
        ...state, fetching: false, fetched: true, data: action.payload,
      }
    case types.SEARCH_REQUEST_ERRORED:
      return {
        ...state, fetching: false, fetched: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
}

export function clearFilters(state = {
  clear: true
}, action) {
  switch (action.type) {
    case types.CLEAR_FILTERS:
      return { ...state, clear: true }
    default:
      return state;
  }
}
