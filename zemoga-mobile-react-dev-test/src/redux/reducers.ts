import { IInitialState } from './@types/initialState';
import {
  CHANGE_VALUES,
  CLEAR_VALUES,
  GENERAL_ERROR,
  GET_COMMENTS,
  GET_POSTS,
  GET_USER
} from './actionTypes';

export const INITIAL_STATE: IInitialState = { posts: [], comments: [], user: {} };

export default (state: any, action: any) => {
  if (action.type === GENERAL_ERROR)
    return {
      ...state,
      status: action?.payload?.response?.status,
      students: action?.payload?.response?.data
    };
  if ([CHANGE_VALUES, CLEAR_VALUES].includes(action.type)) return { ...state, ...action.variables };
  if ([GET_POSTS].includes(action.type))
    return { ...state, status: action.payload.status, posts: action.payload.data };
  if ([GET_USER].includes(action.type))
    return { ...state, status: action.payload.status, user: action.payload.data };
  if ([GET_COMMENTS].includes(action.type))
    return { ...state, status: action.payload.status, comments: action.payload.data };
  //   if ([GET_STUDENTS].includes(action.type))
  //     return {
  //       ...state,
  //       status: action.payload.status,
  //       students: action.payload.data
  //     };
  //   if ([ADD_STUDENTS, DELETE_STUDENTS, UPDATE_STUDENT].includes(action.type))
  //     return {
  //       ...state,
  //       status: action.payload.status
  //     };
  return state;
};
