# Frontend React

Este proyecto es el frontend de una aplicación React, configurada para ejecutarse dentro de un contenedor Docker. La rama geoPlot Contiene el codigo necesario para comunicarse con el backend y dibujar las parcelas en el front.

## Dockerización

El frontend se encapsula en un contenedor Docker, facilitando el despliegue y el desarrollo en cualquier entorno.

### Dockerfile

El `Dockerfile` está configurado para usar Node.js 14 y expone el puerto 3000.

```dockerfile
FROM node:14
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```


### Docker Compose
El archivo `docker-compose.yml` configura el servicio, los volúmenes para el código fuente y los módulos de nodo, y se conecta a una red externa app-network.

```dockerfile
version: '3.8'

services:
  frontend:
    build: .
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    environment:
      - CHOKIDAR_USEPOLLING=true
    networks:
      - app-network

networks:
  app-network:
    external: true
```
### Uso
Para iniciar el frontend: 
```bash
docker-compose up --build
```
