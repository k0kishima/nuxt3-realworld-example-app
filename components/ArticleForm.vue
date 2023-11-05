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
  <form class="space-y-4" @submit="onSubmit">
    <fieldset :disabled="isSubmitting" class="space-y-4">
      <div class="mb-4">
        <input
          v-model="title"
          name="title"
          type="text"
          placeholder="Article Title"
          class="block w-full p-3 text-base text-gray-700 bg-white border border-gray-300 rounded"
        />
        <span class="text-red-500">{{ errors.title }}</span>
      </div>
      <div class="mb-4">
        <input
          v-model="description"
          name="description"
          type="text"
          placeholder="What's this article about?"
          class="block w-full p-3 text-base text-gray-700 bg-white border border-gray-300 rounded"
        />
        <span class="text-red-500">{{ errors.description }}</span>
      </div>
      <div class="mb-4">
        <textarea
          v-model="body"
          name="body"
          placeholder="Write your article..."
          rows="8"
          class="block w-full p-3 text-base text-gray-700 bg-white border border-gray-300 rounded resize-y"
        ></textarea>
        <span class="text-red-500">{{ errors.body }}</span>
      </div>
      <div class="mb-4">
        <input
          v-model="tags"
          name="tags"
          type="text"
          placeholder="Enter tags"
          class="block w-full p-3 text-base text-gray-700 bg-white border border-gray-300 rounded"
        />
        <span class="text-red-500">{{ errors.tags }}</span>
      </div>
      <button
        :disabled="isSubmitting"
        class="float-right px-6 py-3 text-base text-white bg-custom-green border border-custom-green rounded-md hover:bg-green-600"
        :class="{ 'bg-gray-300 cursor-not-allowed': isSubmitting }"
      >
        Publish Article
      </button>
    </fieldset>
  </form>
</template>
