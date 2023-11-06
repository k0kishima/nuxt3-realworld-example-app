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

export type CreateArticleCommentRequest =
  paths['/articles/{slug}/comments']['post']['requestBody']['content']['application/json'];
export type CreateArticleCommentResponse =
  paths['/articles/{slug}/comments']['post']['responses']['200']['content']['application/json'];

export const createArticleComment = (
  token: string,
  articleSlug: string,
  comment: string
) => {
  return $fetch<CreateArticleCommentResponse>(
    `${API_BASE_URL}/articles/${articleSlug}/comments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${encodeURIComponent(token)}`,
      },
      body: { comment: { body: comment } },
    }
  );
};

export type AddArticleToFavoritesRequest =
  paths['/articles/{slug}/favorite']['post']['responses']['200']['content']['application/json'];
export const addArticleToFavorites = (token: string, articleSlug: string) => {
  return $fetch<AddArticleToFavoritesRequest>(
    `${API_BASE_URL}/articles/${articleSlug}/favorite`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${encodeURIComponent(token)}`,
      },
    }
  );
};

export type RemoveArticleFromFavoritesRequest =
  paths['/articles/{slug}/favorite']['delete']['responses']['200']['content']['application/json'];
export const removeArticleFromFavorites = (
  token: string,
  articleSlug: string
) => {
  return $fetch<RemoveArticleFromFavoritesRequest>(
    `${API_BASE_URL}/articles/${articleSlug}/favorite`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${encodeURIComponent(token)}`,
      },
    }
  );
};
