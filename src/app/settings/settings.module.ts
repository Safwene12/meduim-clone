import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    LoadingModule,
    StoreModule.forFeature('settings', reducers),
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
