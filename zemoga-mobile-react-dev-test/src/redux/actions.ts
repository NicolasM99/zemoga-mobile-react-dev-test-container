import axios from 'axios';

import { IGeneralAction } from './@types/generalAction';
import { CHANGE_VALUES, CLEAR_VALUES, GENERAL_ERROR } from './actionTypes';
import { API_URL } from './paths';
import { INITIAL_STATE } from './reducers';

axios.defaults.baseURL = API_URL;

export const changeValues = (variables: any) => {
  return (dispatch: any) => {
    dispatch({ type: CHANGE_VALUES, variables: variables });
  };
};

export const clearValues = () => {
  return (dispatch: any) => {
    dispatch({ type: CLEAR_VALUES, variables: INITIAL_STATE });
  };
};

export const generalAction = ({
  actionType,
  api = '/',
  method = 'get',
  data = undefined, //! MUST BE UNDEFINED IF NOT NEEDED, NOT NULL OR EMPTY OBJECT. OTHERWISE WILL FAIL ON iOS
  requestIndex = null,
  params
}: IGeneralAction) => {
  const fetchParams: any = {
    method,
    params: typeof params === 'string' ? {} : params,
    headers: {}
  };
  if (data)
    fetchParams.data = Object.prototype.hasOwnProperty.call(data, '_parts')
      ? data
      : JSON.stringify(data);
  if (data && !Object.prototype.hasOwnProperty.call(data, '_parts'))
    fetchParams.headers['Content-Type'] = 'multipart/form-data';
  return (dispatch: any) => {
    return axios({
      url: `${api}${typeof params === 'string' ? params : ''}`,
      ...fetchParams
    })
      .then((response) => {
        let requestOrder = {};
        if (requestIndex || requestIndex === 0) requestOrder = { requestIndex: requestIndex + 1 };
        dispatch(changeValues(requestOrder));
        dispatch({
          type: actionType,
          payload: {
            status: response.status,
            data: response.data
          }
        });
      })
      .catch((error) => {
        dispatch({ type: GENERAL_ERROR, payload: error });
      });
  };
};
