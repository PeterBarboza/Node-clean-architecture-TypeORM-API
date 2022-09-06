# Node clean architecture TypeORM API

## Technologies

- <a href="https://github.com/nodejs/node" target="_blank" rel="noreferrer">NodeJS</a>
- <a href="https://github.com/microsoft/TypeScript" target="_blank" rel="noreferrer">Typescript</a>
- <a href="https://github.com/expressjs/express" target="_blank" rel="noreferrer">ExpressJS</a>
- <a href="https://github.com/typeorm/typeorm" target="_blank" rel="noreferrer">TypeORM</a>
- <a href="https://www.mysql.com" target="_blank" rel="noreferrer">MySQL</a>
- <a href="https://github.com/facebook/jest" target="_blank" rel="noreferrer">JEST</a>
- <a href="https://aws.amazon.com/pt/rds" target="_blank" rel="noreferrer">AWS RDS</a>

## How to run the project

<br />

First of all. Create a ".env" file on the project root and fill it with your corresponding data following de ".env.example":
```
# example env .file
PORT=3000

DATABASE_HOST=https://your-db-host.com
DATABASE_NAME=your-db-name
DATABASE_USERNAME=your-db-username
DATABASE_PASSWORD=your-db-password
```

<br />

Install the dependencies:
```bash
$ yarn
```

Run development server:
```bash
$ yarn dev
# or run with debug logs
$ yarn dev:DEBUG
```

<br />

## CLI features

<br />

Run tests:
```bash
$ yarn test
# or for unit tests
$ yarn test:unit
```

To use TypeORM cli Fore more info about, see <a href="https://typeorm.io" target="_blank" rel="noreferrer">how to work with TypeORM</a>:
```bash
$ yarn typeorm <commands-here>
```

TypeORM migration actions. Fore more info about, see <a href="https://typeorm.io/migrations" target="_blank" rel="noreferrer">how to work with TypeORM migrations</a>:
```bash
# Generate a base file to create a new migration manually
$ yarn migration:create <path-to-the-new-migration>

# Generate a migration based on enities created/updated
$ yarn migration:generate <path-to-the-new-migration>

# Run the migrations that haven't been yet
$ yarn migration:up

# Revert the last executed migration
$ yarn migration:revert
```