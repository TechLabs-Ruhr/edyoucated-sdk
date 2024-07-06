# Edyoucated SDK

A basic SDK to interact with the Edyoucated GraphQL API.

## Setup

1. Copy `.env.example` to `.env` and fill in the values.
2. Run `npm ci`.

## Usage

A usage example can be found in [`src/main.ts`](src/main.ts).

## Update types

Add new queries to [`src/queries`](src/queries) and update the schema in [`schema.graphql`](schema.graphql). Run `npm run generate` to update the types.

The SDK will automatically generate types and code for the queries.
