<template>
  <div>
    <Head>
      <!-- TODO: display dynamic and use the constant -->
      <title>Login — Conduit</title>
    </Head>

    <div class="container">
      <TheContainer>
        <h1>Sign in</h1>
        <p>
          <NuxtLink href="/user/register">Need an account?</NuxtLink>
        </p>
        <LoginForm />
      </TheContainer>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  width: 60%;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
}

p {
  text-align: center;
  margin-bottom: 1.5rem;
  a {
    color: #5cb85c;
    text-decoration: none;
  }
}
</style>
