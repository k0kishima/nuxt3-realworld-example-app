<script setup>
import { APP_NAME } from '~/constants';
</script>

<template>
  <div>
    <Head>
      <title>Sign up — {{ APP_NAME }}</title>
    </Head>

    <TheContainer>
      <div class="w-full md:w-1/2 md:mx-auto">
        <h1 class="text-center text-4xl font-medium mb-2">Sign Up</h1>
        <p class="text-center mb-6">
          <NuxtLink
            href="/user/login"
            class="text-custom-green no-underline hover:text-green-600 hover:underline"
          >
            Have an account?
          </NuxtLink>
        </p>
        <SignupForm />
      </div>
    </TheContainer>
  </div>
</template>
