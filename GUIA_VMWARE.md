# Guía de Despliegue en Máquina Virtual (VMware) con Docker

Esta guía explica cómo llevar este proyecto desde tu entorno de desarrollo actual a una Máquina Virtual (por ejemplo, Ubuntu Server) ejecutándose en VMware.

## 1. Preparar la Máquina Virtual

Asumiremos que tienes una VM con Linux (Ubuntu/Debian) configurada en VMware.

### A. Instalar Docker y Docker Compose
Dentro de la terminal de tu VM, ejecuta:

```bash
# 1. Actualizar repositorios
sudo apt-get update

# 2. Instalar Docker
sudo apt-get install -y docker.io

# 3. Habilitar Docker para que arranque al inicio
sudo systemctl enable --now docker

# 4. Instalar Docker Compose (versión plugin moderna)
sudo apt-get install -y docker-compose-plugin
# O si usas la versión standalone antigua: sudo apt-get install docker-compose

# 5. Dar permisos a tu usuario (para no usar sudo siempre)
sudo usermod -aG docker $USER
newgrp docker
```

## 2. Transferir el Proyecto a la VM

Tienes dos opciones principales para llevar el código a la VM:

### Opción A: Usando Git (Recomendado)
Si subes este código a un repositorio (GitHub/GitLab):
```bash
git clone https://github.com/tu-usuario/galactic-magnetar.git
cd galactic-magnetar
```

### Opción B: Copia Directa (SCP/SFTP)
Si no usas Git, puedes copiar la carpeta desde tu máquina local a la VM.
*   En Windows puedes usar **WinSCP** o **FileZilla**.
*   Conecta a la IP de tu VM y arrastra la carpeta `galactic-magnetar` completa.

## 3. Ejecutar el Proyecto

Una vez dentro de la carpeta del proyecto en tu VM:

```bash
docker compose up -d --build
```
*(Nota: Si usas docker-compose antiguo, el comando es `docker-compose up -d --build`)*

Este comando:
1.  Construirá las imágenes del Backend y Frontend.
2.  Descargará la imagen de NGINX.
3.  Levantará todos los contenedores definidos en `docker-compose.yml` (los 3 backends simulados, el balanceador y el frontend).

## 4. Acceder desde fuera de la VM

Para ver la web desde tu navegador (en tu PC anfitrión, fuera de VMware), necesitas la **IP de la VM**.

1.  En la VM, escribe: `ip addr` (mira la interfaz `ens33` o `eth0`). Supongamos que es `192.168.1.50`.
2.  Abre tu navegador en Windows:

*   **Frontend**: `http://192.168.1.50:3000`
*   **Backend (Load Balancer)**: `http://192.168.1.50:8080`

### ⚠️ Solución de Problemas de Red (VMware)

Si no puedes acceder:
1.  **Modo Puente (Bridged)**: Asegúrate que la tarjeta de red de la VM en VMware esté en modo "Bridged" (para que tenga una IP de tu red local) o "NAT" (si sabes configurar el port forwarding de VMware).
2.  **Firewall**: Si la VM tiene firewall activado (`ufw`), permite los puertos:
    ```bash
    sudo ufw allow 3000/tcp
    sudo ufw allow 8080/tcp
    ```
