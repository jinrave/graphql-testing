var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;

var CategoryType = require('./categoryType').CategoryType;
var CategoryModel = require('./../../models/category');

//view all categories
exports.Categories = {
    type: new GraphQLList(CategoryType),
    resolve: function () {
        const categories = CategoryModel.find().exec()
        if (!categories) {
            throw new Error('Error')
        }
        return categories;
    }
}