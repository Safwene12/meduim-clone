import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PopularTagType } from '../../types/popularTag.type';
import { getPopularTagsAction } from './store/actions';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from './store/selectors';

@Component({
  selector: 'mc-popular-tag',
  templateUrl: './popularTags.component.html',
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
}
