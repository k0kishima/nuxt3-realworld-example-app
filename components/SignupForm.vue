<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
import { authStore } from '~/stores/auth';
import { createUser } from '~/lib/api/user';
import { ref, navigateTo } from '#imports';

const isSubmitting = ref(false);

const validationSchema = toTypedSchema(
  zod.object({
    username: zod
      .string()
      .nonempty('This is required')
      .min(4, { message: 'Too short' }),
    email: zod
      .string()
      .nonempty('This is required')
      .email({ message: 'Must be a valid email' }),
    password: zod
      .string()
      .nonempty('This is required')
      .min(6, { message: 'Too short' }),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: username } = useField('username');
const { value: email } = useField('email');
const { value: password } = useField('password');

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true;

  try {
    const response = await createUser(
      values.username,
      values.email,
      values.password
    );

    const auth = authStore();
    auth.signIn(response.user);

    await navigateTo('/');
  } catch (error) {
    alert(error);
  } finally {
    isSubmitting.value = false;
  }
});
</script>

<template>
  <form @submit="onSubmit">
    <fieldset>
      <fieldset class="form-group" :disabled="isSubmitting">
        <input
          v-model="username"
          name="username"
          type="text"
          placeholder="Username"
        />
        <span class="error">{{ errors.username }}</span>
      </fieldset>
      <fieldset class="form-group" :disabled="isSubmitting">
        <input v-model="email" name="email" type="email" placeholder="Email" />
        <span class="error">{{ errors.email }}</span>
      </fieldset>
      <fieldset class="form-group" :disabled="isSubmitting">
        <input
          v-model="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <span class="error">{{ errors.password }}</span>
      </fieldset>
      <button :disabled="isSubmitting" class="float-right">Sign Up</button>
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

fieldset:disabled {
  opacity: 0.5;
  pointer-events: none;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
