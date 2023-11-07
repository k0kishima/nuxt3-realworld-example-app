import { API_BASE_URL } from '~/constants';
import { paths } from '~/openapi.gen';

type UserSetting =
  paths['/user']['put']['requestBody']['content']['application/json'];
type UpdateUserResponse =
  paths['/user']['put']['responses']['200']['content']['application/json'];

export const updateUser = (token: string, userSetting: UserSetting) => {
  return $fetch<UpdateUserResponse>(`${API_BASE_URL}/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${encodeURIComponent(token)}`,
    },
    body: userSetting,
  });
};

type CreateUserResponse =
  paths['/users']['post']['responses']['201']['content']['application/json'];

export const createUser = (
  username: string,
  email: string,
  password: string
) => {
  return $fetch<CreateUserResponse>(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      user: {
        username,
        email,
        password,
      },
    },
  });
};

export type GetUserResponse =
  paths['/profiles/{username}']['get']['responses']['200']['content']['application/json'];

export const getUser = (username: string) => {
  return $fetch<GetUserResponse>(
    `${API_BASE_URL}/profiles/${encodeURIComponent(username)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
