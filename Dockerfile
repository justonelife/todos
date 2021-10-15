# Stage 1
FROM node:14 as build

WORKDIR /todo-fe

COPY ./ /todo-fe

RUN npm install

RUN npm run build

# Stage 2
FROM nginx:latest

COPY --from=build /todo-fe/dist/Todo /usr/share/nginx/html

EXPOSE 80

