FROM node:16-alpine

WORKDIR /app

#Copiamos los ficheros de configuracion
COPY package*.json ./
COPY .env* ./
COPY tsconfig.json ./

# Copiamos el codigo fuente
COPY src/ ./src/

# Instalamos dependencias y construimos la aplicación
RUN npm ci
RUN npm run build

EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"] 
