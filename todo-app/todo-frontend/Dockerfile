FROM node:24 AS base
WORKDIR /usr/src/app
COPY . .
RUN npm ci

FROM base AS test-stage
RUN npm run test

FROM test-stage AS build-stage
# Declare the argument passed from docker-compose
ARG VITE_BACKEND_URL
# Set it as an environment variable for the build process
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
RUN npm run build

FROM nginx:1.29-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
