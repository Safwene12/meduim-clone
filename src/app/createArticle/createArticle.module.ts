import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { CreateArticleComponent } from './components/createArticle/createArticle.component';
import { CreateArticleService } from './services/createArticle.service';
import { CreateArticleEffects } from './store/effects';
import { reducers } from './store/reducers';

const routes = [{ path: 'articles/new', component: CreateArticleComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffects]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
