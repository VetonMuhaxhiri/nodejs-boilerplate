# MariaDB 10.1 is the version distributed with Ubuntu 18.04
# MariaDB 10.3 is the version distributed with Ubuntu 20.04
# We need at least version 10.2.2 in order to have recursive CTEs.
FROM mariadb:10.3

ENV TZ Europe/Oslo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Files in /docker-entrypoint-initdb.d will be automatically run/imported upon building the image.
# Files of type: sql, sql.gz, sh (see https://hub.docker.com/_/mariadb, "Initializing a fresh instance")
# We don't use this now; we let the Lumen API initialize the data instead.
# COPY ./*.sql /docker-entrypoint-initdb.d/

RUN echo "USE mysql;" > /docker-entrypoint-initdb.d/timezones.sql
RUN mysql_tzinfo_to_sql /usr/share/zoneinfo >> /docker-entrypoint-initdb.d/timezones.sql

# The startup configuration is specified in the file /etc/mysql/my.cnf, and that file in turn includes
# any files found in the /etc/mysql/conf.d directory that end with .cnf. Settings in files in this
# directory will augment and/or override settings in /etc/mysql/my.cnf. If you want to use a customized
# MySQL configuration, you can create your alternative configuration file in a directory on the host
# machine and then mount that directory location as /etc/mysql/conf.d inside the mariadb container.
# Source: https://hub.docker.com/_/mariadb
COPY ./conf.d/* /etc/mysql/conf.d/
