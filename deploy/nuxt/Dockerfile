FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
ARG API_BASE_URL
RUN echo "API_BASE_URL=${API_BASE_URL}" > .env
RUN npm run build
CMD ["npm", "start"]
