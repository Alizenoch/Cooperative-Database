# Cooperative Database Management System

## Overview

The Cooperative Database Management System is a web-based system designed to manage cooperative registration, cooperative information, members, provinces, regions, offices, and registry users.

The system supports the management of cooperative records and registration activities for the Cooperative Registry, hosted on a cloud PostgreSQL database (Neon).

## Features

- Cooperative registration and management
- Member management
- Province and regional management
- Office management
- Registry user management
- User login and authentication
- Dashboard for registry staff
- Database management using PostgreSQL and Prisma

## Technology Stack

- Next.js
- React
- TypeScript
- Prisma ORM
- PostgreSQL (Neon Cloud Database)
- Tailwind CSS
- pnpm

## Learning Objectives

- Implement a cloud-hosted PostgreSQL database using Neon.
- Define and create tables and fields for cooperative management.
- Prepare schema relationships for future CRUD operations.
- Plan integration with a Next.js frontend for user interaction.
- Showcase secure user authentication and role-based access (to be implemented).

## Database Structure

The database includes entities such as:

- Cooperatives
- Members
- Provinces
- Regions
- Offices
- Users
- Registrations

### Schema Relationships

- Cooperative ↔ Members (one-to-many)
- Cooperative ↔ Offices (one-to-many)
- Cooperative ↔ Registrations (one-to-many)
- Users ↔ Roles (many-to-one)

## Current Progress

- ✅ Tables and fields created in Neon PostgreSQL  
- ✅ Schema defined with Prisma  
- ✅ Data entries tested in Prisma Studio  
- ⏳ Integration with user interface (Next.js frontend) not yet completed  
- ⏳ CRUD operations to be demonstrated in upcoming sprint  

## Getting Started

### 1. Install dependencies

```bash
pnpm install
