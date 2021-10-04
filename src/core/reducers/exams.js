import types from 'config/types'

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

export function bottomSheet(state = {
  open: false,
  length: 0
}, action) {
  switch (action.type) {
    case types.OPEN_BOTTOM_SHEET:
      return { ...state, open: true, length: action.payload.length }
    case types.CLOSE_BOTTOM_SHEET:
      return { ...state, open: false, length: 0 }
    default:
      return state;
  }
}

export function examsPage(state = {
  menu: 0
}, action) {
  switch (action.type) {
    case types.EXAM_ITEMS_MENU:
      return { ...state, menu: action.payload }
    default:
      return state;
  }
}

export function assesmentItem(state = {
  fetching: false,
  fetched: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.FETCH_ASSESMENT_ITEM_START:
      return { ...state, fetching: true, error: '', errored: false }
    case types.FETCH_ASSESMENT_ITEM_SUCCESS:
      return {
        ...state, fetching: false, fetched: true, data: action.payload,
      }
    case types.FETCH_ASSESMENT_ITEM_ERRORED:
      return {
        ...state, fetching: false, fetched: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
}

export function createAssesmentTest(state = {
  creating: false,
  created: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.CREATE_NEW_ASSESMENT_TEST_START:
      return { ...state, creating: true, error: '', errored: false }
    case types.CREATE_NEW_ASSESMENT_TEST_SUCCESS:
      return {
        ...state, creating: false, created: true, data: action.payload,
      }
    case types.CREATE_NEW_ASSESMENT_TEST_ERRORED:
      return {
        ...state, creating: false, created: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
}

export function previousTests(state = {
  fetching: false,
  fetched: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.FETCH_PREVIOUS_TESTS_START:
      return { ...state, fetching: true, error: '', errored: false }
    case types.FETCH_PREVIOUS_TESTS_SUCCESS:
      return {
        ...state, fetching: false, fetched: true, data: action.payload,
      }
    case types.FETCH_PREVIOUS_TESTS_ERRORED:
      return {
        ...state, fetching: false, fetched: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
}

export function sigleTest(state = {
  fetching: false,
  fetched: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.FETCH_SINGLE_TEST_START:
      return { ...state, fetching: true, error: '', errored: false }
    case types.FETCH_SINGLE_TEST_SUCCESS:
      return {
        ...state, fetching: false, fetched: true, data: action.payload,
      }
    case types.FETCH_SINGLE_TEST_ERRORED:
      return {
        ...state, fetching: false, fetched: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
}

export function updateTest(state = {
  updating: false,
  updated: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.UPDATE_TEST_START:
      return { ...state, updating: true, error: '', errored: false }
    case types.UPDATE_TEST_SUCCESS:
      return {
        ...state, updating: false, updated: true, data: action.payload,
      }
    case types.UPDATE_TEST_ERRORED:
      return {
        ...state, updating: false, updated: false, errored: true, error: action.payload,
      }
    default:
      return state;
  }
}

export function sendToClassroom(state = {
  creating: false,
  created: false,
  data: {},
  error: null,
  errored: false,
}, action) {
  switch (action.type) {
    case types.CREATE_NEW_CLASSROOM_TEST_START:
      return { ...state, creating: true, error: '', errored: false }
    case types.CREATE_NEW_CLASSROOM_TEST_SUCCESS:
      return {
        ...state, creating: false, created: true, data: action.payload,
      }
    case types.CREATE_NEW_CLASSROOM_TEST_ERRORED:
      return {
        ...state, creating: false, created: false, errored: true, error: action.payload,
      }
    case types.CLEAR_NEW_CLASSROOM_TEST:
      return {
        ...state, creating: false, created: false, errored: false, error: null,
      }
    default:
      return state;
  }
}