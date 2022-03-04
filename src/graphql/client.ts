import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPHQL_HOST || '';
const token = `Bearer ${process.env.GRAPHQL_TOKEN}` || '';

const client = new GraphQLClient(endpoint, {
    headers: {
        authorization: token,
    },
});

export default client;
