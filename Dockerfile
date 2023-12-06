FROM php:apache

COPY ./html /var/www/html
COPY ..

RUN docker-php-ext-install mysqli pdo_mysql
COPY ..

EXPOSE 80
