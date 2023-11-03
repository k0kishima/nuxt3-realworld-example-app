<script setup>
import { APP_NAME } from '~/constants';
const title = APP_NAME.toLocaleLowerCase();
</script>

<template>
  <div class="jumbotron w-full justify-center items-center">
    <TheContainer>
      <h1>{{ title }}</h1>
      <p>A place to share your knowledge.</p>
    </TheContainer>
  </div>
</template>

<style scoped>
.jumbotron {
  text-align: center;
  padding: 0.5rem 0 0.5rem 0;
  overflow: auto;
  color: #fff;
  background: #5cb85c;
  box-shadow:
    inset 0 8px 8px -8px rgba(0, 0, 0, 0.3),
    inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
}
.jumbotron:after,
.jumbotron:before {
  content: '';
  clear: both;
  display: block;
}

h1 {
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  font-weight: 700 !important;
  text-align: center;
  font-size: 3.5rem;
  padding-bottom: 0.5rem;
}

p {
  margin: 0 auto 0.5rem;
  max-width: 450px;
  font-weight: 300;
  padding-bottom: 0.5rem;
}
</style>
