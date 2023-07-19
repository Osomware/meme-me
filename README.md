# Meme me

## Table of contents

- [General Info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General Info

This is my personal objective project in Sun Asterisk Company. I hope it will serve as a milestone of new knowledge
and comprehensive understanding on these technology.

## Technologies

Project is created with:

#### Frontend

- Next.js
- Tailwindcss
- TypeScript

#### Backend

- Nestjs
- Prisma
- Graphql
- Postgres

## Manual Setup

1. git clone `git@github.com:Osomware/meme-me.git`
2. cd meme-me
3. cd client
4. npm install
5. cp .env.example .env.local
6. Go to the client folder and set the `NEXT_PUBLIC_BACKEND_URL` variable in `.env` with the api endpoint
7. cd ../api
8. create a database connection in your postgres

## Docker Setup

1. git clone `git@github.com:Osomware/meme-me.git`
2. cd meme-me
3. cp .env.api.example .env.api
4. cp .env.client.example .env.client
5. cp .env.db.example .env.db
6. `docker compose build` or `docker compose up --build` (this will automatically build and run the containers)
7. `docker compose up` (To stop docker containers, run: `docker compose down`)
