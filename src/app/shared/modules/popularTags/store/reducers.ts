import { Action, createReducer, on } from '@ngrx/store';
import { TagStateInterface } from '../types/tagState.interface';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions';

const initialState: TagStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const popularTagReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): TagStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): TagStateInterface => ({
      ...state,
      isLoading: false,
      data: action.tags,
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): TagStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: TagStateInterface, action: Action) {
  return popularTagReducer(state, action);
}
