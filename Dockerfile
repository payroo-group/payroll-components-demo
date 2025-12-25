FROM node:24-alpine AS dependencies-env
COPY . /app

FROM dependencies-env AS development-dependencies-env
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm ci

FROM dependencies-env AS production-dependencies-env
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm install --production

FROM dependencies-env AS build-env
COPY ./package.json package-lock.json /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:24-alpine
COPY ./package.json package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["npm", "run", "start"]
