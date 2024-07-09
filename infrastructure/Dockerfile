FROM node:20.10.0-alpine AS build
WORKDIR /app

COPY ./package*.json ./

RUN npm install 
# --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:1.25.4-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80