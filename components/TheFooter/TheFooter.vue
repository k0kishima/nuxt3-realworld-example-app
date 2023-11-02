<template>
  <footer>
    <div class="container">
      <div class="logo">
        <TheFooterAppLogo />
      </div>

      <span class="attribution">
        © 2023. An interactive learning project from
        <a href="https://thinkster.io">Thinkster</a>. Code licensed under MIT.
      </span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #f3f3f3;
  margin-top: 3rem;
  padding: 1rem 0;
  width: 100%;
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
  vertical-align: middle;
  display: inline-block;
}

.attribution {
  vertical-align: middle;
  margin-left: 10px;
  font-size: 0.8rem;
  color: #bbb;
  font-weight: 300;

  a {
    color: #5cb85c;
    text-decoration: none;
  }
}
</style>
