import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { readFile } from 'fs/promises';
import { resolvers } from './graphql/resolvers.js';

const app: Express = express();

// package dotenv processes .env file
dotenv.config();
const url = process.env.SERVER_URL;
const port = process.env.PORT;

// starting apolloServer to use graphql 
// applyMiddleware intercepts app to set path at /graphql
const typeDefs = await readFile("./graphql/schema.graphql", 'utf-8');
const apolloServer = new ApolloServer({typeDefs, resolvers});
await apolloServer.start();
apolloServer.applyMiddleware({ app, path: '/graphql' });


app.get('/', (req : Request, res: Response) => {
    res.send('Does this route exist?');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at ${url}:${port}`);
    console.log(`⚡️[GraphQl]: GraphQL Sandbox running at ${url}:${port}/graphql`);
});

