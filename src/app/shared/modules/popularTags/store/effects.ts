import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PopularTagsService } from '../services/popularTags.service';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagService.tags().pipe(
          map((tags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({ tags });
          }),

          catchError(() => {
            return of(getPopularTagsFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private popularTagService: PopularTagsService
  ) {}
}
