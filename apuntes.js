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

*/