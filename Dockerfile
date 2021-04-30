FROM node:12.18.4

COPY ["package.json", "package-lock.json", "/usr/src/AppSerpro/"]

WORKDIR /usr/src/AppSerpro/

RUN npm install
RUN npm audit fix
RUN npm install -g @angular/cli@7.3.9

COPY [".", "/usr/src/AppSerpro"]
RUN npm run build --prod --output-path=/dist

FROM nginx:1.19.3

COPY --from=0 /usr/src/AppSerpro/dist/APPSerPro /usr/share/nginx/html

EXPOSE 80

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
# CMD ["npm", "start"]
