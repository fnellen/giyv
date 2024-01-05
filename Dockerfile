FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run astro telemetry disable
RUN npm run build

RUN npx pagefind --site dist/client

ENV STRAPI_TOKEN=$STRAPI_TOKEN
ENV STRAPI_URL=$STRAPI_URL

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs