import { API_BASE_URL } from '~/constants';
import { paths } from '~/openapi.gen';

export type GetArticlesResponse =
  paths['/articles']['get']['responses']['200']['content']['application/json'];

export type GetArticleResponse =
  paths['/articles/{slug}']['get']['responses']['200']['content']['application/json'];

export type GetArticleCommentsResponse =
  paths['/articles/{slug}/comments']['get']['responses']['200']['content']['application/json'];

type CreateArticlesRequest =
  paths['/articles']['post']['requestBody']['content']['application/json'];
export type CreateArticlesResponse =
  paths['/articles']['post']['responses']['201']['content']['application/json'];

export const createArticle = (
  token: string,
  dto: CreateArticlesRequest['article']
) => {
  return $fetch<CreateArticlesResponse>(`${API_BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${encodeURIComponent(token)}`,
    },
    body: { article: dto },
  });
};
