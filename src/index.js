import express from 'express';
import {
    graphqlExpress,
    graphiqlExpress
} from 'apollo-server-express';
import schema from './graphql/graphql-index';
const indexSchema = require('./graphql/graphql-index').indexSchema;
import mongoose from 'mongoose';

//GraphQL Schema
const app = express();

//Root resolver
const root = {
    message: () => 'Hello World!'
};

//create mongodb connection
mongoose.connect('mongodb://localhost/graphql-testing',
    )
    .then(() => {
        console.log('mongodb connect');
    })
    .catch( err =>{
        console.log(' Error connection : ' + err);
    });

//Create an express server and a Graphql end point
app.use('/graphql', express.json(), graphqlExpress({
    schema: indexSchema,
}));

app.use('/graphiql', express.json(), graphiqlExpress({
    endpointURL: '/graphql'
}));


app.listen(4000, () => {
    console.log('server running on port 4000')
});
