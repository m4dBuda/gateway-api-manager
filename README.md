![Logo](https://firebasestorage.googleapis.com/v0/b/genpag-app.appspot.com/o/Linkedin_Cover_Gen_1584x396%20copy%205.png?alt=media&token=2ef8c906-c027-4cee-b636-e0eee5d0ede7)

[![Deploy to Firebase Hosting on merge](https://github.com/genpag/gen-monorepo-frontend/actions/workflows/firebase-hosting-main.yml/badge.svg?branch=main)](https://github.com/genpag/gen-monorepo-frontend/actions/workflows/firebase-hosting-main.yml)

# GraphQL Gateway Microservices

## Running locally

Clone the project:

```bash
  git clone https://github.com/
```

Enter the project directory:

```bash
  cd my-project
```

Install the dependencies:

```bash
  npm install
```

Start the server:

```bash
  nest start users
  nest start products
  nest start catalog
  nest start communications
  nest start gateway
```

## Important commands:

To update the database schema, run the following command:

```bash
  prisma generate
```

To create a new local database, run the following command after setting the env variables:

```bash
  npx prisma migrate dev
```

To run the database server in web server:

```bash
  prisma studio
```

To abort merge conflicts:

```bash
  git merge --abort
```

To abort everything:

```bash
  git reset --merge
```

To create new component:

```bash
  nest generate module "name"
```

### Prerequisites

To run this project, you need to have the following software installed on your machine:

- Node.js
- Nest
- GraphQL
- PostgreSQL

## Contributing

If you would like to contribute to this project, please follow these steps:

    1. Create a new branch: "git checkout -b feature/your-feature"; // Use the develop branch as the start point before creating any branch, make sure it is updated
    2. Make your changes and commit them: "git add ." then "git commit -m "Your changes description"
    3. Push to the branch: "git push origin feature/your-feature";
    4. Create a pull request. Dont forget to put in a related label, tag a reviewer and always point the merge request to develop branch.

## Roadmap

- Optimize application builds;
- Enhance runtime;
- Implement unit tests;
- Containerize the modules
- Use multiple databases schemas

## Authors

- [@m4dBuda](https://github.com/m4dBuda)