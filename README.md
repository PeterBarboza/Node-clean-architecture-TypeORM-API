# Node clean architecture TypeORM API

## Technologies

- [NodeJS](https://github.com/nodejs/node)
- [Typescript](https://github.com/microsoft/TypeScript)
- [ExpressJS](https://github.com/expressjs/express)
- [TypeORM](https://github.com/typeorm/typeorm)
- [MySQL](https://www.mysql.com)
- [JEST](https://github.com/facebook/jest)
- [AWS RDS](https://aws.amazon.com/pt/rds) (I've used AWS RDS in this project but fell free to use any other MySQL db)

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

To use TypeORM cli Fore more info about, see [how to work with TypeORM](https://typeorm.io):
```bash
$ yarn typeorm <commands-here>
```

TypeORM migration actions. Fore more info about, see [how to work with TypeORM migrations](https://typeorm.io/migrations):
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