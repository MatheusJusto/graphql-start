const { gql, ApolloServer } = require( "apollo-server" )

/*
    * => Schema
    * => Schema definition language ou Linguagem de definição de esquema
    * -  SDL
*/
const produtos = [
  { id: 1, nome: "Camiseta", valor: 30.0 },
  { id: 2, nome: "Short", valor: 50.0 },
];

const typeDefs = gql`
    type Produto {
        id: ID
        nome: String
        valor: Float
        disponivel: Boolean
    }

    type Usuario {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String]!
    }

    type Query {
        usuario: Usuario
        produtos: [Produto]
    }
`

const resolvers = {
    Query: {
        usuario() {
            return {
                id: 1,
                nome: "Matheus",
                salario: 30000.00,
                ativo: true,
                idade: 28,
            }
        },

        produtos() {
            return produtos
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})
//execute
server.listen()