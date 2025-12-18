FROM node:16-alpine

WORKDIR /app

# Argument to select environment (development or production)
# ENV NODE_ENV=${NODE_ENV}

#Copiamos los ficheros de configuracion
COPY package*.json ./
COPY .env* ./
COPY tsconfig.json ./

# Copy the appropriate .env file based on NODE_ENV
RUN if [ "$NODE_ENV" = "production" ] && [ -f .env.production ]; then \
      cp .env.production .env; \
    elif [ "$NODE_ENV" = "development" ] && [ -f .env.development ]; then \
      cp .env.development .env; \
    else \
      echo "Warning: No .env file found for NODE_ENV=$NODE_ENV, using default .env if exists"; \
    fi

# Copiamos el codigo fuente
COPY src/ ./src/

# Alternativas para instalar dependencias
# 1) npm install -- instala les dependències i actualitza package-lock.json
# 2) npm ci -- instal·la les dependències exactes de package-lock.json
RUN npm ci
RUN npm run build

EXPOSE 3000

# Alternativas para iniciar la aplicación
CMD ["npm", "start"] 
