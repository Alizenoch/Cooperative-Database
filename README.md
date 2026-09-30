# Cooperative Database Management System

## Overview

The Cooperative Database Management System is a web-based system for managing cooperative information for the Cooperative Registry.

The system uses Neon PostgreSQL as the cloud database. It stores information about cooperatives, members, provinces, regions, and system users. The Next.js application provides the interface for working with the database.

For Module #1, the main focus is setting up the cloud database, creating the database structure and relationships, connecting the application to the database, and performing CRUD operations.

## Features

* Cooperative registration and management
* Member management
* Province and regional information
* Registry user management
* User login
* Staff dashboard
* PostgreSQL cloud database using Neon
* Prisma for connecting the application to the database
* Create, read, update, and delete cooperative records

## Technology Stack

* Next.js
* React
* TypeScript
* Prisma
* PostgreSQL (Neon)
* Tailwind CSS
* pnpm

## Learning Objectives

* Set up a PostgreSQL database using Neon.
* Create tables and fields for the cooperative database.
* Create relationships between database tables.
* Connect the database to the application using Prisma.
* Perform CRUD operations on database records.
* Test and manage data stored in the cloud database.

## Database Structure

The database includes:

* Cooperatives
* Members
* Provinces
* Regions
* Users

### Schema Relationships

* Province and Cooperatives
* Cooperative and Members
* Province and Region
* Users and system roles

The relationships are defined in the Prisma schema using primary and foreign keys.

## Current Progress

* Neon PostgreSQL database has been set up.
* Prisma schema has been created and validated.
* Database tables and relationships have been created.
* Cooperative records can be added to the database.
* Cooperative records can be viewed from the application.
* Cooperative records can be searched and filtered.
* Cooperative records can be updated.
* Cooperative records can be deleted.
* User login is connected to the database.
* Database records have been tested using Prisma.
* Create, Read, Update, and Delete operations have been tested successfully for cooperative records.
* A registration page has been added for entering new cooperatives.

## Module #1 – Cloud Database

The focus of this module is the cloud database. The project uses Neon PostgreSQL for storing cooperative data and Prisma to connect the database to the application.

The application provides a web interface for working with the database. The database operations include creating, reading, updating, and deleting cooperative records.

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

* `prisma/schema.prisma`
* `prisma/seed.ts`
* `lib/prisma.ts`
* `app/dashboard/cooperatives/page.tsx`
* `app/dashboard/cooperatives/ProvinceFilter.tsx`
* `app/dashboard/cooperatives/SearchFilter.tsx`
* `app/dashboard/cooperatives/StatusFilter.tsx`
* `app/dashboard/cooperatives/existing/page.tsx`
* `app/dashboard/cooperatives/existing/actions.ts`
* `app/dashboard/cooperatives/register/page.tsx`
* `app/dashboard/cooperatives/[id]/page.tsx`
* `app/dashboard/cooperatives/[id]/edit/page.tsx`
