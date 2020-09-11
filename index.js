const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')

const { GraphQLString, GraphQLObjectType, GraphQLSchema } = require('graphql')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'QueryCommand',
    fields: {
      greeting: {
        type: GraphQLString,
        resolve: (parent, args, context, info) => 'hello tom'
      }
    }
  })
})

const app = express()

app.use(cors(), express.json())

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
)
app.listen(8000, () => console.log('serving on port 8000'))
