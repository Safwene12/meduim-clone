import { createAction, props } from '@ngrx/store';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { ActionTypes } from './ActionType';

export const getPopularTagsAction = createAction(ActionTypes.GET_TAG);

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_TAG_SUCCESS,
  props<{ tags: PopularTagType[] }>()
);

export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_TAG_FAILURE
);
