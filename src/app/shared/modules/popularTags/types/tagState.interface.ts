import { PopularTagType } from 'src/app/shared/types/popularTag.type';

export interface TagStateInterface {
  isLoading: boolean;
  error: string | null;
  data: PopularTagType[] | null;
}
