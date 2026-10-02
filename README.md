# Cooperative Database Management System

## Overview

The Cooperative Database Management System is a web-based system for managing cooperative information for the Cooperative Registry.

The system uses Neon PostgreSQL as the cloud database. It stores information about cooperatives, members, provinces, regions, and system users. The Next.js application provides the interface for working with the database.

For Module #1, the main focus was setting up the cloud database, creating the database structure and relationships, connecting the application to the database, and performing CRUD operations.

For Module #2, the focus is building the web application that provides an interface for registry staff to work with the cooperative database.

## Features

- User login
- Staff dashboard
- Cooperative registration and management
- View existing cooperatives
- Register new cooperatives
- Search cooperative records
- Filter cooperatives by province
- Filter cooperatives by status
- Update cooperative registration information
- Delete cooperative records
- PostgreSQL cloud database using Neon
- Prisma for connecting the application to the database
- API routes for cooperative records

## Technology Stack

- Next.js
- React
- TypeScript
- Prisma
- PostgreSQL (Neon)
- Tailwind CSS
- pnpm

## Learning Objectives

- Set up a PostgreSQL database using Neon.
- Create tables and relationships for the cooperative database.
- Connect the database to the application using Prisma.
- Build a web application using Next.js and React.
- Create pages and forms for working with cooperative information.
- Create API routes for database operations.
- Perform CRUD operations on cooperative records.
- Test and manage data through the web application.

## Database Structure

The database includes:

- Cooperatives
- Members
- Provinces
- Regions
- Users

### Schema Relationships

- Province and Cooperatives
- Cooperative and Members
- Province and Region
- Users and system roles

The relationships are defined in the Prisma schema using primary and foreign keys.

## Current Progress

- Neon PostgreSQL database has been set up.
- Prisma schema has been created and validated.
- Database tables and relationships have been created.
- User login is working.
- Staff dashboard is working.
- Cooperative management section is working.
- Existing Cooperatives page has been added.
- Register New Cooperative page has been added.
- Cooperative records can be viewed from the application.
- Cooperative records can be searched.
- Cooperative records can be filtered by province and status.
- Cooperative registration information can be updated.
- Cooperative records can be deleted.
- API routes have been created for cooperative operations.
- Create, Read, Update, and Delete operations have been tested for cooperative records.

For this module, the working parts of the application are **Login, Dashboard, and Cooperatives**. The other sections shown in the dashboard navigation are planned for later development.

## Module #1 – Cloud Database

The focus of Module #1 was the cloud database. The project uses Neon PostgreSQL for storing cooperative data and Prisma to connect the database to the application.

The application provides a web interface for working with the database. The database operations include creating, reading, updating, and deleting cooperative records.

## Module #2 – Web App

The focus of Module #2 is the web application for the Cooperative Database Management System.

For this module, I will focus on three main working sections:

- **Login**
- **Dashboard**
- **Cooperatives**

The Login page allows an authorized user to sign in to the system. The Dashboard provides the main staff interface after login.

The Cooperatives section allows registry staff to view existing cooperatives, search and filter records, register new cooperatives, update cooperative registration information, and delete records.

API routes are used to handle actions between the web application and the database.

The other sections shown in the dashboard navigation will be developed later as the project continues. For this module, the demonstration will focus only on the Login, Dashboard, and Cooperatives sections.

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Set up the database connection

The project uses a `.env` file in the project root for the Neon PostgreSQL database connection.

Add your own Neon database connection string:

```text
DATABASE_URL="your-neon-database-connection-string"
```

Do not commit the `.env` file to GitHub.

### 3. Validate the Prisma schema

```bash
pnpm prisma validate
```

### 4. Push the schema to the database

```bash
pnpm prisma db push
```

### 5. Run the application

```bash
pnpm dev
```

Open the application at:

```text
http://localhost:3000
```

## Tasks Completed for Module #1

The following files were created or updated as part of the Cloud Database module:

- `prisma/schema.prisma`
- `prisma/seed.ts`
- `lib/prisma.ts`
- `app/dashboard/cooperatives/page.tsx`
- `app/dashboard/cooperatives/ProvinceFilter.tsx`
- `app/dashboard/cooperatives/SearchFilter.tsx`
- `app/dashboard/cooperatives/StatusFilter.tsx`
- `app/dashboard/cooperatives/existing/page.tsx`
- `app/dashboard/cooperatives/existing/actions.ts`
- `app/dashboard/cooperatives/register/page.tsx`
- `app/dashboard/cooperatives/[id]/page.tsx`

## Tasks Completed for Module #2

The following files were created or updated as part of the Web App module:

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `app/login/page.tsx`
- `app/dashboard/page.tsx`
- `app/api/auth/login/route.ts`
- `app/api/cooperatives/route.ts`
- `app/api/cooperatives/[id]/route.ts`
- `app/api/members/route.ts`
- `app/api/members/[id]/route.ts`
- `app/api/registration/route.ts`
- `app/api/registration/[id]/route.ts`
- `app/api/users/route.ts`
- `app/api/users/[id]/route.ts`
- `package.json`
- `prisma.config.ts`

## Video

The Module #2 video walkthrough will be added here after the presentation is recorded.

The video will demonstrate the working parts of the application:

1. Login
2. Dashboard
3. Cooperatives
4. Searching and filtering cooperatives
5. Registering a new cooperative
6. Updating cooperative information
7. Deleting a cooperative
8. Code walkthrough

## GitHub Repository

The source code for this project is available in the public GitHub repository.
