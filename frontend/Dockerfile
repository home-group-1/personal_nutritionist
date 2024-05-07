FROM node:22-alpine as build

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY ./public ./public
COPY ./src ./src
COPY ./tsconfig.json .

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# Using Nginx as the production server 
FROM nginx:alpine

COPY --from=build /frontend/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
