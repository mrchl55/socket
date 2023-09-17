## Build docker image && run the App

```sh
docker-compose up --build
```

## Or run servers separately

# -------------------------- Server --------------------------

```sh

docker build --rm -t re-server-prod -f ./server/Dockerfile ./server

docker run -it -p 5000:5000 re-server-prod
```

# -------------------------- Client --------------------------

```sh

docker build --rm -t re-frontend-prod -f ./frontend/Dockerfile ./frontend

docker run -it -p 3000:3000 re-frontend-prod
```
