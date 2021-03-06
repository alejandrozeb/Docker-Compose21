/*
Docker compose es la parte que se encarga de administrar varios docker files

Permite tener diferentes docker files y administrarlo con
docker compose

los procesos se define en el archivo docker compose
ya no construimos container por container
es mas rapido ademas incluye redes, volumenes.

ya no se hara de manera manual la creacion de estos ahora vamos a orquestra sus funciones

https://docs.docker.com/compose/install/

documentacion de docker compose
no tuve probelmas de instalacion siguiendo los pasos de la doc en ubuntu

----instaland dependencias-----------

RUN docker-php-ext-install mysqli \
    && docker-php-ext-install tokenizer \
    && docker-php-ext-install opcache \
    && docker-php-ext-install pdo \
    && docker-php-ext-install pdo_mysql 

la sintaxis de la instlacion es propio de la instalacion

si usamos otros frameworks podemos tener esta base de php
ya no usaremos docker bulid tmbien podemos usar la extencion de vs
en el dockerfile tenemos un container la onfiguracion necesaria para que se levante
todo lo que va en enviroment
con compose se puede manejar diferentes container a basede uno
comopse orquesta.

version3
elegimos las que queramos
services
son containers en base a una imagen
app
es el nombre que tiene el container
restart
se levanta el container y lo intenta 3 veces
build
indicamos donde esta el docker file del servicio
volume
reflejamos las modificaciones
espeja los cambios
ports 
inidicamos primero el puerto de la maquina y segundo el pùerto del container
envirement
son las variables de ambiente del container

------comandos--------------

docker-compose build
inidicamos que contruya las imagenes
lo hace en automatico
y crea el contenedor descargando la imagen y los siguientes pasos


docker-compose up
para levantar el proyecto.

docker-compose up -d 
para enviarlo de fondo

al entrar al puerto se puede ver las configuraciones 

en el proyecto inicialmente se esta imprimiento php info.
ya podemos trabajar en la app
docker-compose down 
para bajar el container
te ayuda a evitar muchas configuraciones con docker


-----volumenes----
mysql_php_data:
    database: 
    restart: on-failure:3
    decimos que inicien 3 veces

    image: mysql:5.7
    indicamos la imagen

    ports:
      - 3306:3306
    indicamos el puerto de la pc y el container

    volumes:
      - mysql_php_data:/var/lib/mysql
    donde se guarda el volumen la data

si tenemos 100 cpntainers la informacion permanecera

------dependedencias entre contenedores------
depends_on: 
      - database

inidicamos que el servicio creado depedned de la bd simpre se crea
primero la bd y luego el servicio para que sea en sequeencia
-----------mysql------
podemos usar dos opciones para base de datos workbrench o phpmyadmin

PMA_ARBITRARY=1
documentacion de ph myadmin

docker compose se encarga de crear y hacer el build de la imagen en caso no este creada
ademas de descargar la imagen si es necesario

al configurar no me permite configurar el mysql_root como root
para controlar el user solo uso la variable de entorno root_password


---------DOCKER CURRICULUM-----
https://docker-curriculum.com/#playing-with-busybox

$ docker rm $(docker ps -a -q -f status=exited)

eliminar todos los contenedores en estado exited

terminology
images, containres, Docker daemon(servicio en pc), dockerClient(linena de comando )
docker hub

Static sites

docker run --rm <<nombre>>
rm remueve el contenedor cuando se sale de el mismo





*/