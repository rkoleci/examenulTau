import axios from 'axios'

import { baseUrl } from '../../config/addresses'
import types from '../../config/types'

export const searchRequest = (params) => { 
    return (dispatch) => {
      dispatch({
        type: types.SEARCH_REQUEST_START
      });
      axios({
        method: 'GET',
        url: `${baseUrl}`,
      }).then((response) => {
        dispatch({
          type: types.SEARCH_REQUEST_SUCCESS,
          payload: {
            data: response.data,
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
  