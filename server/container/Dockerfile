# syntax=docker/dockerfile:1

FROM … AS server-common
FROM … AS pdf-service
FROM … AS tpl-service
FROM … AS auth-service
FROM … AS web-common
FROM … AS web-designer
FROM … AS web-print
FROM … AS sample-data

FROM mcr.microsoft.com/playwright:v1.44.0-focal
RUN npx playwright@1.44 install chromium

RUN apt update && \
    apt install -y curl gnupg2 ca-certificates lsb-release ubuntu-keyring && \
    curl https://nginx.org/keys/nginx_signing.key \
      | gpg --dearmor \
      | tee /usr/share/keyrings/nginx-archive-keyring.gpg > /dev/null && \
    echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
      | tee /etc/apt/sources.list.d/nginx.list > /dev/null && \
    echo "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" \
      | tee /etc/apt/preferences.d/99nginx > /dev/null && \
    echo "\n\n------ test ----" && cat /etc/apt/preferences.d/99nginx && echo "---- end ---\n\n" && \
    apt update && \
    apt install -y nginx

COPY --from=server-common . /leya-print/server/common
COPY --from=pdf-service . /leya-print/server/pdf-service
RUN cd /leya-print/server/pdf-service && npm i

COPY --from=tpl-service . /leya-print/server/tpl-service
RUN cd /leya-print/server/tpl-service && npm i

COPY --from=auth-service . /leya-print/server/auth-service
RUN cd /leya-print/server/auth-service && npm i

COPY --from=web-common . /leya-print/web/common
COPY --from=web-print www-prod /leya-print/web/print/www
COPY --from=web-designer www-prod /leya-print/web/designer/www

COPY --from=sample-data . /leya-print/data

COPY ./root /
RUN chmod 777 /leya-print/start-with-nginx.sh

WORKDIR /leya-print/

EXPOSE 8080

STOPSIGNAL SIGQUIT

CMD ["./start-with-nginx.sh"]
