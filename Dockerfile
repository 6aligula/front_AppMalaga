# Usamos una imagen oficial de Node.js como base
FROM node:14

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos los archivos de configuración del proyecto al contenedor
COPY package.json ./
COPY package-lock.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el resto del código fuente al contenedor
COPY . .

# Exponemos el puerto 3000 que es el que utiliza Create React App por defecto
EXPOSE 3000

# El comando para iniciar la aplicación
CMD ["npm", "start"]
