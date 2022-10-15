import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { readFile } from 'fs/promises';
import { resolvers } from './graphql/resolvers.js';

const app: Express = express();

// package dotenv processes .env file
dotenv.config();
const url = process.env.SERVER_URL;
const port = process.env.PORT || 3000;
const queriesSchemaPath = process.env.GRAPQL_QUERIES_SCHEMA_PATH || "";
const mutationSchemaPath = process.env.GRAPQL_MUTATIONS_SCHEMA_PATH || "";

// starting apolloServer to use graphql
// applyMiddleware intercepts app to set path at /graphql
// we are able to split graphql typeDefs by passing array in server init
const queryTypeDefs = await readFile(queriesSchemaPath, 'utf-8');
const mutationTypeDefs = await readFile(mutationSchemaPath, 'utf-8');
const apolloServer = new ApolloServer({typeDefs: [queryTypeDefs, mutationTypeDefs], resolvers});

await apolloServer.start();
apolloServer.applyMiddleware({ app, path: '/graphql' });


app.get('/', (req : Request, res: Response) => {
    res.send('Does this route exist?');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at ${url}:${port}`);
    console.log(`⚡️[GraphQl]: GraphQL Sandbox running at ${url}:${port}/graphql`);
});

