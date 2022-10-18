import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { SettingsStatInterface } from '../types/settingsState.interface';

export const settingsFeatureSelector = (
  state: AppStateInterface
): SettingsStatInterface => state.settings;

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsStat: SettingsStatInterface) => settingsStat.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsStat: SettingsStatInterface) => settingsStat.validationErrors
);
