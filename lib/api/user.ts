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
