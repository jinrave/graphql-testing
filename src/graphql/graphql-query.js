var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var Categories = require('./category/categoryQuery').Categories;

// Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
        return {
            categories: Categories,
        }
    }
});