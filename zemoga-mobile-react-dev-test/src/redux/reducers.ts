import { IInitialState } from './@types/initialState';
import {
  CHANGE_VALUES,
  CLEAR_VALUES,
  DELETE_POST,
  GENERAL_ERROR,
  GET_COMMENTS,
  GET_POSTS,
  GET_USER,
  PATCH_POST
} from './actionTypes';

export const INITIAL_STATE: IInitialState = {
  posts: [],
  comments: {},
  users: {},
  status: null,
  internetStatus: false,
  patchedPost: null,
  requestIndex: null
};

export default (state: any = INITIAL_STATE, action: any = {}) => {
  if (action.type === GENERAL_ERROR) {
    if (!state.internetStatus) return { ...state, status: 1 };
    return {
      ...state,
      status: action?.payload?.response?.status
    };
  }
  if ([CHANGE_VALUES, CLEAR_VALUES].includes(action.type)) return { ...state, ...action.variables };
  if ([GET_POSTS].includes(action.type))
    return { ...state, status: action.payload.status, posts: action.payload.data };
  if ([PATCH_POST].includes(action.type))
    return { ...state, status: action.payload.status, patchedPost: action.payload.data };
  if ([DELETE_POST].includes(action.type)) return { ...state, status: action.payload.status };
  if ([GET_USER].includes(action.type)) {
    const users = { ...state.users };
    users[action.payload.data.id] = action.payload.data;
    return { ...state, status: action.payload.status, users };
  }
  if ([GET_COMMENTS].includes(action.type)) {
    const comments = { ...state.comments };
    comments[action.payload.data[0].postId] = action.payload.data;
    return { ...state, status: action.payload.status, comments };
  }
  return state;
};
