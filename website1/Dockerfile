############################################################
# Dockerfile to build Apache-php web server container image
# Based on apache-php
############################################################

FROM php:7.0-apache
MAINTAINER Alzamly Hossam
RUN apt-get update && docker-php-ext-install pdo pdo_mysql
CMD service apache2 restart
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]



