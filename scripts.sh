# -------------------------- Server  -------------------------- #
docker build --rm -t re-server-prod -f ./server/Dockerfile ./server

docker run -it -p 5000:5000 re-server-prod

# -------------------------- frontend  -------------------------- #
docker build --rm -t re-frontend-prod -f ./frontend/Dockerfile ./frontend

docker run -it -p 4000:4000 re-frontend-prod

# -------------------------- Docker compose  -------------------------- #

docker-compose up --build


