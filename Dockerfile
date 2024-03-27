# Utiliser une image Nginx officielle comme base
FROM nginx:alpine

# Copier les fichiers statiques du dossier dist/public du projet vers le dossier serveur web
COPY ./dist /usr/share/nginx/html

# Exposer le port 80 pour accéder à votre application
EXPOSE 80

# Lancer Nginx et maintenir le processus en premier plan
CMD ["nginx", "-g", "daemon off;"]
