import { API_BASE_URL } from '~/constants';
import { paths } from '~/openapi.gen';

type LoginUserRequest =
  paths['/users/login']['post']['requestBody']['content']['application/json'];
type LoginUserResponse =
  paths['/users/login']['post']['responses']['200']['content']['application/json'];

export const login = (user: LoginUserRequest) => {
  return $fetch<LoginUserResponse>(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: user,
  });
};
