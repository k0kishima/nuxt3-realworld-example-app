<script setup>
import AppLogo from './AppLogo.vue';
import GuestMenu from './GuestMenu.vue';
</script>

<template>
  <header>
    <nav>
      <div class="container">
        <div class="logo">
          <AppLogo />
        </div>
        <div class="menu">
          <GuestMenu />
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  top: 0;
  position: sticky;
  background-color: #fff;
  z-index: 1;
}

nav {
  border-radius: 0.25rem;
  position: relative;
  padding: 0.5rem 1rem;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

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

.logo {
  float: left;
}

.menu {
  float: right;
}
</style>
