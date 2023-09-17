# -------------------------- Server  -------------------------- #
docker build --rm -t re-server-prod -f ./server/Dockerfile ./server

docker run -it -p 3001:3001 re-server-prod

# -------------------------- frontend  -------------------------- #
docker build --rm -t re-frontend-prod -f ./frontend/Dockerfile ./frontend

docker run -it -p 3000:3000 re-frontend-prod

# -------------------------- Docker compose  -------------------------- #

docker-compose up --build


