import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';
import { TagListModule } from '../shared/modules/tagList/tagList.module';
import { ArticleService as ArticleServiceShared } from '../shared/services/article.service';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';

import { GetArticleEffect } from './store/effects/getArticle.effect';
import { reducers } from './store/reducers';

const routes = [
  {
    path: 'article/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [ArticleServiceShared, ArticleService],
})
export class ArticleModule {}
