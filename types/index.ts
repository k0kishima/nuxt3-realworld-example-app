import { components, paths } from '~/openapi.gen';

export type User = components['schemas']['User'];
export type ArticleComment = components['schemas']['Comment'];

export type GetArticlesResponse =
  paths['/articles']['get']['responses']['200']['content']['application/json'];

export type GetArticleResponse =
  paths['/articles/{slug}']['get']['responses']['200']['content']['application/json'];

export type GetArticleCommentsResponse =
  paths['/articles/{slug}/comments']['get']['responses']['200']['content']['application/json'];
