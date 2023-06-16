const { gql, ApolloServer } = require( "apollo-server" )

/*
    * Scalar Types
    * - Int
    * - Float
    * - String
    * - Boolean
    *  - ID
*/

const typeDefs = gql`
    type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }
`

const resolvers = {
    Query: {
        idade() {
            return 18
        },
        salario() {
            return 2000000.50
        },
        ativo() {
            return true
        },
        nome() {
            return "Matheus"
        },
        id() {
            return 545645498789
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})
//execute
server.listen()