# BooksCRUD

Simple fullstack bookscrud app built with NestJS and React

## Requirements

```sh
node.js
postgresql
typescript
docker
```

## Tech stack

Backend:
_ NestJS
_ Express
_ Postgresql
_ Typeorm

Frontend:
_ React + Typescript
_ Ract-hhok-form \* tailwindcss

## How to run

### Local development

    - Clone this repo and `cd` into it
    - Create new postgres databse
       `createdb books-api`
    - Run the backend: In current terminal run these following commands
        - `cd backend`
        - `cp env.sample .env` and update it
        - `npm install`
        - `npm run start:dev`
    - Run the frontend: Open another terminal, cd into the root of the cloned repo and run these following commands
        - `cd dashboard`
        - `npm install`
        - `npm start`

    NOTE: Make sure the PORT `8000` and `3000` are free.

### Docker

    From the root of the project run these commands
    ```
    docker compose build
    docker compose up -d
    ```
