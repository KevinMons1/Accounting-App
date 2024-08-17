# Accounting App

## Overview

This project is structured following Domain-Driven Design (DDD) principles, focusing on a modular architecture where the core business logic is encapsulated within specific domain modules. The primary focus of this project is to manage invoices, leveraging modern web technologies to provide a scalable and maintainable codebase.

## Table of Contents

- [Setup](#setup)
- [Technologies](#technologies)
- [DDD Implementation](#ddd-implementation)

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v20.11.0)
- yarn

## Setup
1. ``yarn``
2. ``yarn dev``

## Technologies

The project leverages the following key technologies:

- Next.js: A React framework for building server-side rendered (SSR) applications.
- TypeScript: Provides static typing for better code quality and maintainability.
- Redux: State management library, used for managing application-wide state.
- Jest: Testing framework for ensuring code reliability through unit tests.

## DDD Implementation

### Domain Layer

The `domain` directory within each module (e.g., `modules/invoice/domain`) contains the core business logic. This layer is responsible for defining the business rules, entities, value objects, and domain services.

### Application Layer

The `application` directory handles the orchestration of the domain logic. It includes use cases, services, and any other application-specific logic that interacts with the domain layer.

### Presenter Layer

The `presenter` directory is responsible for preparing the data for the UI layer. It may include controllers, mappers, and other components that adapt the domain logic to be used in the frontend.

### Shared Module

The `shared` module provides common resources and utilities that can be reused across different domain modules. This includes shared types, configurations, and utility functions.
