<template>
  <footer class="bg-gray-100 mt-12 py-4 w-full">
    <div class="container mx-auto px-4">
      <div class="logo inline-block align-middle">
        <TheFooterAppLogo />
      </div>

      <span
        class="attribution align-middle ml-2 text-xs text-gray-400 font-light"
      >
        © 2023. An interactive learning project from
        <a href="https://thinkster.io" class="text-custom-green no-underline">
          Thinkster </a
        >. Code licensed under MIT.
      </span>
    </div>
  </footer>
</template>

<style scoped>
@media (min-width: 544px) {
  .container {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 940px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
