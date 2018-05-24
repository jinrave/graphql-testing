var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var CategoryType = require('./categoryType').CategoryType;
var CategoryModel = require('./../../models/category');

exports.createCategory = {
    type: CategoryType,
    args: {
        name: {
            type: GraphQLString
        },
        slug: {
            type: GraphQLString
        }
    },
    resolve: async (root, params) => {
        const uModel = await new CategoryModel({
            name: params.name,
            slug: params.slug
        });

        const newCategory = uModel.save();
        return await newCategory;
    }
}

exports.editCategory = {
    type: CategoryType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: GraphQLString
        },
        slug: {
            type: GraphQLString
        }
    },
    resolve: async (root, params) => {
        //update member
        const category = await CategoryModel.findOneAndUpdate({
            "_id": params.id
        },{
            name: params.name,
            slug: params.slug,
        })
        .then(result => {
            if(result){
                return result;
            }else{
                throw new Error("Edit category failed");
            }
        })
        .catch(err => {
            throw new Error(err);
        });

        return await CategoryModel.findById(params.id).exec();
    }
}

exports.removeCategory = {
    type: new GraphQLList(CategoryType),
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve: async (root, params) => {
        //update member
        const category = await CategoryModel.findOneAndRemove({
            "_id": params.id
        })
        .catch(err => {
            throw new Error(err);
        });
        
        return await CategoryModel.find().exec();
    }
}