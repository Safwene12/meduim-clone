import { Action, createReducer, on } from '@ngrx/store';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/updateCurrentUser.action';
import { SettingsStatInterface } from '../types/settingsState.interface';

const initialState: SettingsStatInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsReducers = createReducer(
  initialState,
  on(updateCurrentUserAction, (state: SettingsStatInterface) => ({
    ...state,
    isSubmitting: true,
  })),

  on(updateCurrentUserSuccessAction, (state: SettingsStatInterface) => ({
    ...state,
    isSubmitting: false,
  })),

  on(
    updateCurrentUserFailureAction,
    (state: SettingsStatInterface, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: SettingsStatInterface, action: Action) {
  return settingsReducers(state, action);
}
