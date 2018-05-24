var GraphQLObjectType = require('graphql').GraphQLObjectType;

//category mutation
var categoryMutation = require('./category/categoryMutation');

exports.mutation =  new GraphQLObjectType({
    name: 'Mutation',
    fields: function(){
        return {
            createCategory: categoryMutation.createCategory,
            editCategory: categoryMutation.editCategory,
            removeCategory: categoryMutation.removeCategory,
        }
    }
});