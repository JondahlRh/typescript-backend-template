# FruchtLabor Teamspeak Bot

TeamSpeak Bot for the FruchtLabor Community

## Dependencies and Development

Project uses [pnpm](https://pnpm.io/) for dependency management.

In development the bot will be started with concurrently and native tsc watch mode & node watch mode.

It's recomended to test the app with [docker](https://docs.docker.com/get-docker/) bevor commiting changes. (Example docker compose setup below)

```bash
pnpm install
pnpm dev
```

## Envirement Variables

```bash

```

## Example docker-compose setup

```bash
# windows
docker-compose -f .\docker-compose.local.yml -p galevate-backend up --build

# linux
docker-compose -f ./docker-compose.local.yml -p galevate-backend up --build
```

```yaml filename="docker-compose.local.yml"
services:
  app:
    build:
      context: ..
      dockerfile: Dockerfile
    image: galevate-backend:latest
    container_name: galevate-backend
    restart: unless-stopped
    env_file:
      - ../.env
    ports:
      - "5000:5000"
```
