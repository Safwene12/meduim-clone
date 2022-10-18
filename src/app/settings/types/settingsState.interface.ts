import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface SettingsStatInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
