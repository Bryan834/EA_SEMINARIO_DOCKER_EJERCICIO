# Build stage
FROM node:16-alpine as build

WORKDIR /app

# Copiamos los ficheros de configuracion
COPY package*.json ./
COPY .env* ./
COPY nginx.conf.* ./

RUN npm install
COPY . .

RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf* /app/

# Argument to select environment (development or production)
ARG NGINX_ENV=production

# Copy the appropriate nginx config based on environment
RUN rm -f /etc/nginx/conf.d/*.conf && \
    if [ "$NGINX_ENV" = "production" ] && [ -f /app/nginx.conf.production ]; then \
      cp /app/nginx.conf.production /etc/nginx/conf.d/app.conf; \
    elif [ "$NGINX_ENV" = "development" ] && [ -f /app/nginx.conf.development ]; then \
      cp /app/nginx.conf.development /etc/nginx/conf.d/app.conf; \
    else \
      echo "Warning: No nginx.conf file found for NGINX_ENV=$NGINX_ENV, using default"; \
      cp /app/nginx.conf /etc/nginx/conf.d/app.conf; \
    fi

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
