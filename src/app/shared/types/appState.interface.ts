import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { CreateArticleStateInterface } from 'src/app/createArticle/types/createArticleState.interface';
import { EditArticleStateInterface } from 'src/app/editArticle/types/editArticleState.interface';
import { SettingsStatInterface } from 'src/app/settings/types/settingsState.interface';
import { UserProfileStateInterface } from 'src/app/userProfile/types/userProfileState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { TagStateInterface } from '../modules/popularTags/types/tagState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: TagStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
  settings: SettingsStatInterface;
  userProfile: UserProfileStateInterface;
}
