import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';
import {
    buildSchema
} from 'graphql';
var queryType = require('./graphql-query').queryType;
var mutation = require('./graphql-mutation').mutation;

exports.indexSchema = new GraphQLSchema({
    query: queryType,
    mutation: mutation,
});