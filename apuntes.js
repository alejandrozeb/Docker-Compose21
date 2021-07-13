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



*/