FROM nginx:1.19.0-alpine

RUN rm /etc/nginx/conf.d/default.conf

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]