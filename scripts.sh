# -------------------------- Server Dev -------------------------- #
docker build --rm -t re-server-dev -f ./server/Dockerfile.dev ./server

docker run -it -p 3001:3001 -v ${PWD}/server:/server re-server-dev

# -------------------------- frontend Dev -------------------------- #
docker build --rm -t re-frontend-dev -f ./frontend/Dockerfile.dev ./frontend

docker run -it -p 3000:3000 -v ${PWD}/frontend/src:/frontend/src re-frontend-dev

# -------------------------- Docker compose Dev -------------------------- #

docker-compose -f docker-compose.dev.yml up --build


# -------------------------- Server Prod -------------------------- #
docker build --rm -t re-server-prod -f ./server/Dockerfile ./server

docker run -it -p 3001:3001 re-server-prod

# -------------------------- frontend Prod -------------------------- #
docker build --rm -t re-frontend-prod -f ./frontend/Dockerfile ./frontend

docker run -it -p 3000:3000 re-frontend-prod

# -------------------------- Docker compose Prod -------------------------- #

docker-compose up --build


