import { components, paths } from '~/openapi.gen';

export type User = components['schemas']['User'];
export type GetArticlesResponse =
  paths['/articles']['get']['responses']['200']['content']['application/json'];
