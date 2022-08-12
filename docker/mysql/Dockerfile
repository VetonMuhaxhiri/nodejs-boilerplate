FROM mysql/mysql-server:5.7.22

COPY entrypoint/docker-entrypoint.sh /entrypoint.sh
COPY entrypoint/healthcheck.sh /healthcheck.sh
RUN chmod +x /entrypoint.sh && chmod +x /healthcheck.sh
ENTRYPOINT ["/entrypoint.sh"]
HEALTHCHECK CMD /healthcheck.sh
CMD ["mysqld"]