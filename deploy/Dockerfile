# Stage 1: Build the nuxt application
FROM node:16-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve the application with nginx
FROM nginx:alpine
COPY --from=builder /app/.output/public /usr/share/nginx/html
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
