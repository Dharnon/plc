# Guía de Despliegue TOTALMENTE OFFLINE (Docker + App)

Esta guía cubre el escenario más restrictivo: **La Máquina Virtual (MV) no tiene Internet y ni siquiera tiene Docker instalado.**

Necesitas dos ordenadores:
1.  **PC Conectado**: Tu ordenador actual con internet.
2.  **MV Offline**: El servidor de destino.

---

## FASE 1: Instalar Docker Offline

Como no puedes hacer `apt-get install docker`, tienes que descargar los instaladores manuales (`.deb`) y llevarlos en un USB.

### 1. Descargar los binarios (En tu PC Conectado)
Ve a la web oficial de binarios de Docker (ejemplo para **Ubuntu**):
[https://download.docker.com/linux/ubuntu/dists/noble/pool/stable/amd64/](https://download.docker.com/linux/ubuntu/dists/noble/pool/stable/amd64/)
*(Nota: Cambia 'noble' por tu versión: 'jammy' para 22.04, 'focal' para 20.04)*

Descarga estos 5 archivos `.deb`:
1.  `containerd.io_..._amd64.deb`
2.  `docker-ce_..._amd64.deb` (Docker Daemon)
3.  `docker-ce-cli_..._amd64.deb` (CLI)
4.  `docker-buildx-plugin_..._amd64.deb`
5.  `docker-compose-plugin_..._amd64.deb` (Docker Compose)

### 2. Copiar e Instalar (En la MV Offline)
Copia esos 5 archivos a una carpeta en la MV. Luego abre la terminal en esa carpeta ejecútalos en orden (o todos a la vez):

```bash
sudo dpkg -i *.deb
```

*Si te da error de dependencias faltantes (ej: `iptables`, `git`), tendrás que descargarlas también manualmente desde packages.ubuntu.com, pero los paquetes de Docker suelen ser bastante autocontenidos en sistemas modernos.*

Prueba que funciona:
```bash
sudo docker --version
sudo docker compose version
```

---

## FASE 2: Llevar tu Aplicación

Ahora que tienes Docker, seguimos el proceso de "Portacontenedores".

### 1. Construir las imágenes (En tu PC Conectado)
En tu proyecto `galactic-magnetar`:

```bash
docker compose build
```

### 2. Exportar a Archivos (En tu PC Conectado)
Empaquetamos las imágenes de tu código:

```bash
# Guardar en archivos .tar
docker save -o backend.tar galactic-backend:latest
docker save -o frontend.tar galactic-frontend:latest
```

### 3. Transferir y Cargar (En la MV Offline)
Lleva los archivos `.tar` y el `docker-compose.yml` a la MV.

```bash
# Cargar las imágenes
sudo docker load -i backend.tar
sudo docker load -i frontend.tar

# Verificar
sudo docker images
```

---

## FASE 3: Arrancar (En la MV Offline)

```bash
# Levantar el sistema sin intentar construir nada
sudo docker compose up -d
```

Ahora deberías tener acceso en `http://localhost:3000` (o la IP de la MV).
