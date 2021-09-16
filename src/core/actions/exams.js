import axios from 'axios'

import { baseUrl } from '../../config/addresses'
import types from '../../config/types'
import { examItems } from '../../config/constants'

export const searchRequest = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.SEARCH_REQUEST_START
    });
    axios({
      method: 'PUT',
      url: `https://jsonplaceholder.typicode.com/todos/1`, // set real address
      data: params
    }).then((response) => {
      dispatch({
        type: types.SEARCH_REQUEST_SUCCESS,
        payload: {
          data: examItems,
        },
      });
    }).catch((error) => {
      dispatch({
        type: types.SEARCH_REQUEST_ERRORED,
        payload: {
          error,
        },
      })
    });
  }
}

export const clearFilters = () => {
  return (dispatch) => {
    dispatch({
      type: types.CLEAR_FILTERS,
    })
  }
}

export const openBottomSheet = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.OPEN_BOTTOM_SHEET,
      payload: {
        length: params.length
      }
    })
  }
}

export const closeBottomSheet = () => {
  return (dispatch) => {
    dispatch({
      type: types.CLOSE_BOTTOM_SHEET,
    })
  }
}

export const changeExamsPage = (params) => {
  console.log(params)
  return (dispatch) => {
    dispatch({
      type: types.EXAM_ITEMS_MENU,
      payload: params.menu
    })
  }
}

export const fetchAssesmentItem = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_ASSESMENT_ITEM_START
    });
    axios({
      method: 'GET',
      url: `${baseUrl}repository/lms/items/${params.id}`,
    }).then((response) => {
      dispatch({
        type: types.FETCH_ASSESMENT_ITEM_SUCCESS,
        payload: {
          data: response,
        },
      });
    }).catch((error) => {
      dispatch({
        type: types.FETCH_ASSESMENT_ITEM_ERRORED,
        payload: {
          error,
        },
      })
    });
  }
}

export const createNewAssesmentTest = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.CREATE_NEW_ASSESMENT_TEST_START
    });
    axios({
      method: 'POST',
      url: `${baseUrl}assesment-delivery/tests`,
    }).then((response) => {
      dispatch({
        type: types.CREATE_NEW_ASSESMENT_TEST_SUCCESS,
        payload: {
          data: response,
        },
      });
    }).catch((error) => {
      dispatch({
        type: types.CREATE_NEW_ASSESMENT_TEST_ERRORED,
        payload: {
          error,
        },
      })
    });
  }
}

export const fetchPreviousTests = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_PREVIOUS_TESTS_START
    });
    axios({
      method: 'GET',
      url: `${baseUrl}assesment-delivery/tests`,
    }).then((response) => {
      dispatch({
        type: types.FETCH_PREVIOUS_TESTS_SUCCESS,
        payload: {
          data: response,
        },
      });
    }).catch((error) => {
      dispatch({
        type: types.FETCH_PREVIOUS_TESTS_ERRORED,
        payload: {
          error,
        },
      })
    });
  }
}

export const fetchSingleTest = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_SINGLE_TEST_START
    });
    axios({
      method: 'GET',
      url: `${baseUrl}assesment-delivery/test/${params.id}`,
    }).then((response) => {
      dispatch({
        type: types.FETCH_SINGLE_TEST_SUCCESS,
        payload: {
          data: response,
        },
      });
    }).catch((error) => {
      dispatch({
        type: types.FETCH_SINGLE_TEST_ERRORED,
        payload: {
          error,
        },
      })
    });
  }
}

export const updateTest = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE_TEST_START
    });
    axios({
      method: 'PUT',
      url: `${baseUrl}assesment-delivery/test/${params.id}`,
    }).then((response) => {
      dispatch({
        type: types.UPDATE_TEST_SUCCESS,
        payload: {
          data: response,
        },
      });
    }).catch((error) => {
      dispatch({
        type: types.UPDATE_TEST_ERRORED,
        payload: {
          error,
        },
      })
    });
  }
}

export const sendToClassRoom = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.CREATE_NEW_CLASSROOM_TEST_START
    });
    axios({
      method: 'PUT',
      url: `${baseUrl}app/et/classroom/${params.classRoomId}/test_assignment`,
    }).then((response) => {
      dispatch({
        type: types.CREATE_NEW_CLASSROOM_TEST_SUCCESS,
        payload: {
          data: response,
        },
      });
    }).catch((error) => {
      dispatch({
        type: types.CREATE_NEW_CLASSROOM_TEST_ERRORED,
        payload: {
          error,
        },
      })
    });
  }
}