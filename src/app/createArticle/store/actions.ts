import { createAction, props } from '@ngrx/store';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { ActionType } from './actionType';

export const createArticleAction = createAction(
  ActionType.CREATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>()
);

export const createArticleSuccessAction = createAction(
  ActionType.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const createArticleFailureAction = createAction(
  ActionType.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
