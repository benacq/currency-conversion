
## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## Technologies Used

- Nestjs
- Reactjs
- Typescript
- Postgres(Prisma)
- Tailwindcss
- Turbo
## Getting Started

This is a monorepo, root directory contains two directories for this project.
- UI - This is the frontend of the application
- API - This is the Nestjs server

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](#)
- [Postgres](#)
- [Typescript](#)



### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:benacq/currency-conversion.git

2. cd into ```currency-convertion/api``` and create a .env file with you DB connection string which will be used by prisma, kindly refer to the .env.example for a sample.

3. cd into currency-convertion directory and run ```yarn install``` to install all dependencies.
after that run ```yarn run dev```.
If you use a different package manager like npm or pnpm, you can run the equivalent command for it.