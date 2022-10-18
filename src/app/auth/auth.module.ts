import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from 'src/app/auth/store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { PersistanceService } from '../shared/services/persistance.service';
import { LoginComponent } from './components/login/login.component';
import { LoginEffects } from './store/effects/login.effect';
import { getCurrentUserEffects } from './store/effects/getCurrentUser.effect';
import { UpdateCurrentUserEffects } from './store/effects/updateCurrentUser.effect';
import { LogoutEffect } from './store/effects/logout.effect';
const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffects,
      getCurrentUserEffects,
      UpdateCurrentUserEffects,
      LogoutEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
