<template>
  <ul>
    <li><a>Home</a></li>
    <li><a>Sign in</a></li>
    <li><a>Sign up</a></li>
  </ul>
</template>

<style scoped>
ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

li {
  float: left;
}

li + li {
  margin-left: 1rem;
}

a {
  color: rgba(0, 0, 0, 0.3);
  display: block;
  padding-top: 0.425rem;
  padding-bottom: 0.425rem;
}
</style>
