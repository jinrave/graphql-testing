var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLList = require('graphql').GraphQLList;

// Category Type
exports.CategoryType = new GraphQLObjectType({
    name: 'category',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLString)
            },
            name: {
                type: GraphQLString
            },
            slug: {
                type: GraphQLString
            },
        }
    }
});