<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
import { paths } from '~/openapi.gen';
import { authStore } from '~/stores/auth';
import { API_BASE_URL } from '~/constants';

type LoginUserRequest =
  paths['/users/login']['post']['requestBody']['content']['application/json'];
type SuccessResponse =
  paths['/users/login']['post']['responses']['200']['content']['application/json'];

const validationSchema = toTypedSchema(
  zod.object({
    email: zod
      .string()
      .nonempty('This is required')
      .email({ message: 'Must be a valid email' }),
    password: zod
      .string()
      .nonempty('This is required')
      .min(8, { message: 'Too short' }),
  })
);
const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');

const auth = authStore();
const onSubmit = handleSubmit(async (values) => {
  const body: LoginUserRequest = {
    user: {
      email: values.email,
      password: values.password,
    },
  };

  // eslint-disable-next-line no-undef
  const { data } = await useFetch<SuccessResponse>(
    `${API_BASE_URL}/users/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }
  );

  auth.signIn(data.value?.user?.token as string);
});
</script>

<template>
  <form @submit="onSubmit">
    <fieldset>
      <fieldset class="form-group">
        <input v-model="email" name="email" type="email" placeholder="Email" />
        <span class="error">{{ errors.email }}</span>
      </fieldset>
      <fieldset class="form-group">
        <input
          v-model="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <span class="error">{{ errors.password }}</span>
      </fieldset>
      <button>Sign in</button>
    </fieldset>
  </form>
</template>

<style scoped>
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

.form-group {
  margin-bottom: 1rem;
}

input {
  display: block;
  width: 100%;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  line-height: 1.25;
  color: #55595c;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.error {
  color: red;
}

button {
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}
</style>
