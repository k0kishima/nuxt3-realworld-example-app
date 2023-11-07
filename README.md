# ![RealWorld Example App](logo.png)

> ## [Nuxt3](https://nuxt.com/) / [Tailwind CSS](https://tailwindcss.com/) / [Pinia(Store)](https://pinia.vuejs.org/) codebase containing real world examples that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.


## [Demo](https://nuxt3-realworld-example-app.vercel.app/)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)


This codebase was created to demonstrate a fully fledged fullstack application built with **[Nuxt3](https://nuxt.com/)** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **[Nuxt3](https://nuxt.com/)** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.


## Getting started

To make it work in the local development environment, clone this repository and execute the following in the project root.

```bash
$ npm install
$ npm run dev
```

## Generate TypeScript types from an OpenAPI schema file

You can generate types automatically by bellow command.

```
$ npm run generate:api
```

Then `openapi.gen.ts` generated.

The schema file path is placed `openapi.yml`.
Update the file if you needed before generate types.
