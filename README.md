# Express Caching
Caching is the process of storing data in a temporary storage area called cache. Caching is used to make data available quickly to reduce load on the server. In this article, we will learn how to implement caching in Express.js.

## Tech Stack
- [Express.js](https://expressjs.com/) - A web framework for Node.js
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Docker](https://www.docker.com/) - A tool designed to make it easier to create, deploy, and run applications by using containers.
- [Redis](https://redis.io/) - An in-memory data structure store, used as a database, cache, and message broker.
- [Postgres](https://www.postgresql.org/) - A powerful, open source object-relational database system.
- [Prisma](https://www.prisma.io/) - A next-generation ORM for Node.js and TypeScript.

## Tools
- [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Yarn](https://yarnpkg.com/) - A package manager for the JavaScript programming language.
- [VS Code](https://code.visualstudio.com/) - A code editor redefined and optimized for building and debugging modern web and cloud applications.
- [Insomnia](https://insomnia.rest/) - A powerful REST API Client with cookie management, environment variables, code generation, and authentication for Mac, Windows, and Linux.

## Project Structure
```bash
PROJECT
├── prisma
|  ├── schema.prisma
|  └── seed.ts
├── src
|  ├── configs
|  ├── data
|  ├── routes
|  ├── types
|  ├── app.ts
|  └── index.ts
├── docker-compose.yml
├── package.json
└── tsconfig.json
```

## Routes
- `GET /employees` - Get all employees
