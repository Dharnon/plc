# Guía de Despliegue OFFLINE (Sin Internet)

Si tu Máquina Virtual (MV) **no tiene internet**, no puedes usar `git clone` ni `npm install` ni `docker build` dentro de ella (porque fallará al intentar descargar las dependencias).

La estrategia es: **Construir aquí (PC con internet) -> Empaquetar -> Llevar a la MV -> Ejecutar.**

## Paso 1: Construir las imágenes en tu PC (Con Internet)

Ejecuta esto en tu terminal actual (Windows/Host):

```bash
# 1. Construir las imágenes usando el nuevo docker-compose simplificado
docker-compose build
```

Esto creará dos imágenes en tu Docker local:
*   `galactic-backend:latest`
*   `galactic-frontend:latest`

## Paso 2: Guardar las imágenes en archivos (.tar)

Ahora exportamos esas imágenes a archivos que puedas copiar en un USB o por red local.

```bash
# Guardar Backend
docker save -o backend.tar galactic-backend:latest

# Guardar Frontend
docker save -o frontend.tar galactic-frontend:latest
```

## Paso 3: Transferir a la MV

Copia los archivos `backend.tar`, `frontend.tar` y el archivo `docker-compose.yml` a tu carpeta en la MV (usando USB, WinSCP, carpeta compartida, etc.).

## Paso 4: Cargar en la MV (Offline)

Dentro de la terminal de tu máquina virtual (donde ya tienes los archivos):

```bash
# 1. Cargar las imágenes en el Docker de la MV
docker load -i backend.tar
docker load -i frontend.tar

# 2. Verificar que están ahí
docker images
# Deberías ver 'galactic-backend' y 'galactic-frontend'
```

## Paso 5: Arrancar el sistema

Como ya tienes las imágenes cargadas, Docker Compose no intentará construirlas (ni necesitará internet).

```bash
# IMPORTANTE: No uses el flag --build aquí
docker-compose up -d
```

¡Listo! El sistema arrancará usando las versiones que compilaste en tu PC.
