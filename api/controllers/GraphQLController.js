/**
 * GraphQLController
 *
 * @description :: Server-side logic for managing Graphqls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


let schema = null;

module.exports = {
	index(req, res) {
        var graphql = require('graphql').graphql,
            generateSchema = require('sails-graphql').generateSchema;

        if (!schema) {
            schema = generateSchema(sails.models);
        }

        graphql(
            schema,                       // generated schema 
            req.body,                     // graphql query string 
            null,                         // default rootValue 
            {                             // context 
                request: sails.request,     // default request method - required 
                reqData: {                  // object of any data you want to forward to server's internal request 
                    headers: {/*your headers to forward */}
                }
            }).then((result) => {
                // errors handling 
                res.json(result.data);
            });
    }
};

