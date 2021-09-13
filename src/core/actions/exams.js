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