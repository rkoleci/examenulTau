import axios from 'axios'

import endpoints, { baseUrl } from 'config/addresses'
import types from 'config/types'

export const searchRequest = (params) => {
  return (dispatch) => {
    dispatch({
      type: types.SEARCH_REQUEST_START
    });
    axios({
      method: 'GET',
      url: endpoints.search_request,
      data: params
    }).then((response) => { 
      dispatch({
        type: types.SEARCH_REQUEST_SUCCESS,
        payload: {
          data: response.data
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
      url: `${endpoints.assessment_item}/${params.id}`,
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
      url: `${endpoints.assesment_delivery_tests}`,
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
      url: `${baseUrl}`,
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
      url: `${endpoints.assesment_delivery_test}/${params.id}`,
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
      url: `${endpoints.assesment_delivery_test}/${params.id}`,
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
      method: 'POST',
      url: `${endpoints.classroom_test}`,
      data: params
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

export const clearSentToClassRoom = () => {
  return (dispatch) => {
    dispatch({
      type: types.CLEAR_NEW_CLASSROOM_TEST,
    })
  }
}