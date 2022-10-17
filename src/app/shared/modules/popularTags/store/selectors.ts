import { createSelector } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { TagStateInterface } from '../types/tagState.interface';

export const popularTagsFeatureSelector = (
  state: AppStateInterface
): TagStateInterface => state.popularTags;

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: TagStateInterface) => popularTagsState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: TagStateInterface) => popularTagsState.error
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: TagStateInterface) => popularTagsState.data
);
