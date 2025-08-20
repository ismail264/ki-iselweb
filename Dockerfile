# nginx'in küçük alpine sürümünü temel al
FROM nginx:alpine

# Web dosyalarını nginx'in html klasörüne kopyala
COPY . /usr/share/nginx/html

# Nginx varsayılan portunu aç
EXPOSE 80
