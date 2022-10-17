import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PopularTagsComponent } from './popularTags.component';
import { PopularTagsService } from './services/popularTags.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GetPopularTagsEffect } from './store/effects';
import { reducers } from './store/reducers';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', reducers),
    ErrorMessageModule,
    LoadingModule,
    RouterModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
