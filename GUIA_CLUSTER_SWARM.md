# Guía de Despliegue en Cluster (Docker Swarm)

Esta guía explica cómo pasar de una ejecución local (`docker-compose`) a un **Cluster Real Multi-Host** utilizando **Docker Swarm**.

El objetivo es cumplir tu requerimiento:
> *"Levantar en el host1 el backend y el frontend".*

## 1. Prerrequisitos: El Cluster

Imagina que tienes 2 o 3 máquinas (servidores virtuales, raspberry pis, o tu propio PC simulando).

1.  **Inicializar el Manager** (En tu máquina principal):
    ```bash
    docker swarm init
    ```

2.  **Añadir Nodos (Workers)**:
    Ejecuta el comando que te devuelve el paso anterior en las otras máquinas para unirlas al cluster.

## 2. Etiquetar tus Nodos ("Host 1")

Para decirle a Docker *"pon esto en el Host 1"*, primero debemos identificar quién es el "Host 1". Docker usa **Labels** (etiquetas).

Averigua el ID de tu nodo:
```bash
docker node ls
```

Asigna la etiqueta `type=host1` al nodo que desees:
```bash
# Sintaxis: docker node update --label-add <clave>=<valor> <ID-DEL-NODO>
docker node update --label-add type=host1 <hostname-de-tu-pc>
```

## 3. El Archivo de Despliegue (`docker-swarm.yml`)

He creado un archivo `docker-swarm.yml` específico para esto. Las diferencias clave con el normal son:

1.  **`deploy: placement: constraints:`**: Aquí es donde ocurre la magia.
    ```yaml
    deploy:
      placement:
        constraints:
          - node.labels.type == host1
    ```
    Esto obliga a que el servicio SOLO arranque en nodos que tengan la etiqueta `type=host1`.

2.  **`driver: overlay`**: La red ya no es `bridge`, es `overlay` para permitir comunicación entre distintas máquinas físicas.

3.  **Imágenes**: En un cluster real, las imágenes deben estar subidas a un **Registry** (como Docker Hub o un registry privado) porque los otros nodos no tienen acceso a tu disco duro para hacer `build`.
    *   *Para pruebas locales (single-node swarm)*: Puedes construirla localmente, pero es un poco truculento. Lo ideal es `docker push mi-usuario/mi-repo`.

## 4. Desplegar el Stack

Una vez etiquetado el nodo, lanza "la pila" (Stack):

```bash
docker stack deploy -c docker-swarm.yml galactic_stack
```

## 5. Verificar

Comprueba que los servicios están corriendo en el nodo correcto:

```bash
docker service ps galactic_stack_backend
docker service ps galactic_stack_frontend
```

Verás en la columna `NODE` que están asignados a tu máquina etiquetada como `host1`.

---

### Resumen de comandos para probar AHORA (Localmente)

Si solo tienes TU ordenador y quieres probar la lógica de cluster:

1.  `docker swarm init` (si no lo has hecho).
2.  `docker node update --label-add type=host1 $(hostname)` (Te etiquetas a ti mismo).
3.  **Importante**: Como es local, necesitas construir las imágenes antes para que el Swarm las encuentre:
    ```bash
    docker build -t my-registry/proyecto-plc:latest ./proyecto-plc
    docker build -t my-registry/plc-dashboard:latest ./plc-dashboard
    ```
4.  `docker stack deploy -c docker-swarm.yml galactic_stack`
