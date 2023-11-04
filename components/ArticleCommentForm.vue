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
    <fieldset>
      <div class="card">
        <div class="card-block">
          <fieldset class="form-group" :disabled="isSubmitting">
            <textarea
              v-model="body"
              name="body"
              placeholder="Write a comment..."
              rows="4"
              class="textarea"
            ></textarea>
            <span class="error">{{ errors.body }}</span>
          </fieldset>
        </div>
        <div class="card-footer">
          <UserAvatar :image="author.image" class="avatar" />
          <button :disabled="isSubmitting" class="float-right">
            Post Comment
          </button>
        </div>
      </div>
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

textarea {
  border: 0;
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
}

.error {
  color: red;
}

button {
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
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
  resize: vertical;
}

.card {
  border: 1px solid #e5e5e5;
}
.card-block p {
  padding: 1.25rem;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: #f5f5f5;
  border-top: 1px solid #e5e5e5;
  box-shadow: none !important;
  font-size: 0.8rem;
  font-weight: 300;
}

.avatar {
  max-width: 30px;
}
</style>
