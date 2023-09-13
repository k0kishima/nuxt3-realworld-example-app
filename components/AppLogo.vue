<script lang="ts">
import { defineComponent } from 'vue';
import { APP_NAME } from '~/constants';

export default defineComponent({
  name: 'AppLogo',

  setup() {
    const title = APP_NAME.toLocaleLowerCase();
    return { title };
  },
});
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped>
h1 {
  color: #5cb85c;
  font-family: 'Titillium Web', sans-serif;
}
</style>
