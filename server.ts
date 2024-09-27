import { graphql, buildSchema } from "graphql"
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    age: Int
  }
`)
 
// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  hello:() => {
    return "Hello world!"
  },
  age: () => {
    return 38;
  }
}
 
// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: "{ hello age }",
  rootValue
}).then(response => {
  console.log(JSON.stringify(response, null, 2))
})