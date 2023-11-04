<script setup lang="ts">
import * as zod from 'zod';
import { defineProps } from 'vue';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { ref, navigateTo } from '#imports';
import { createArticle } from '~/lib/api/article';
import { User } from '~/types';

const props = defineProps({
  author: {
    type: Object as () => User,
    required: true,
  },
});

const isSubmitting = ref(false);

const validationSchema = toTypedSchema(
  zod.object({
    title: zod
      .string()
      .nonempty('This is required')
      .min(4, { message: 'Too short' }),
    description: zod.string(),
    body: zod.string().nonempty('This is required'),
    tags: zod.string().nullable().optional(),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: title } = useField('title');
const { value: description } = useField('description');
const { value: body } = useField('body');
const { value: tags } = useField('tags');

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true;

  try {
    const response = await createArticle(props.author.token, {
      title: values.title,
      description: values.description,
      body: values.body,
    });

    await navigateTo(`/article/${response.article.slug}`);
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
          v-model="title"
          name="title"
          type="text"
          placeholder="Article Title"
        />
        <span class="error">{{ errors.title }}</span>
      </fieldset>
      <fieldset class="form-group" :disabled="isSubmitting">
        <input
          v-model="description"
          name="description"
          type="text"
          placeholder="What's this article about?"
        />
        <span class="error">{{ errors.description }}</span>
      </fieldset>
      <fieldset class="form-group" :disabled="isSubmitting">
        <textarea
          v-model="body"
          name="body"
          placeholder="Write your article..."
          rows="8"
          class="textarea"
        ></textarea>
        <span class="error">{{ errors.body }}</span>
      </fieldset>
      <fieldset class="form-group" :disabled="isSubmitting">
        <input
          v-model="tags"
          name="tags"
          type="text"
          placeholder="Enter tags"
        />
        <span class="error">{{ errors.tags }}</span>
      </fieldset>
      <button :disabled="isSubmitting" class="float-right">
        Publish Article
      </button>
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

input,
textarea {
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

.textarea {
  resize: vertical; /* 縦方向のリサイズのみ許可 */
}
</style>
