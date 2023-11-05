<script setup lang="ts">
import * as zod from 'zod';
import { defineProps, defineEmits } from 'vue';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { ref } from '#imports';
import { createArticleComment } from '~/lib/api/article';
import { User } from '~/types';

const props = defineProps({
  author: {
    type: Object as () => User,
    required: true,
  },
  articleSlug: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['create:articleComment']);

const isSubmitting = ref(false);

const validationSchema = toTypedSchema(
  zod.object({
    body: zod.string().nonempty('This is required'),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: body } = useField('body');

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true;

  try {
    await createArticleComment(
      props.author.token,
      props.articleSlug,
      values.body
    );

    emit('create:articleComment');
  } catch (error) {
    alert(error);
  } finally {
    isSubmitting.value = false;
  }
});
</script>

<template>
  <form @submit="onSubmit">
    <fieldset class="w-full p-0 m-0 border-0">
      <div class="border border-gray-300">
        <div>
          <textarea
            v-model="body"
            name="body"
            placeholder="Write a comment..."
            rows="4"
            class="w-full p-3 text-base leading-normal bg-white border rounded resize-y"
            :class="{ 'opacity-50 pointer-events-none': isSubmitting }"
          ></textarea>
          <span class="text-red-500">{{ errors.body }}</span>
        </div>
        <div
          class="p-3 bg-gray-100 border-t border-gray-300 text-sm font-light flex items-center"
        >
          <UserAvatar :image="author.image" class="w-8 h-8 mr-4" />
          <button
            :disabled="isSubmitting"
            class="float-right p-2 text-xs font-bold text-white bg-custom-green border border-custom-green rounded hover:bg-green-600"
            :class="{ 'bg-gray-300 cursor-not-allowed': isSubmitting }"
          >
            Post Comment
          </button>
        </div>
      </div>
    </fieldset>
  </form>
</template>
