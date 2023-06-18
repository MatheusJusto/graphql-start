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

const db = [
    {
        id: 1,
        nome: "Matehus",
        email: "matheus@matheus.com",
        telefone_fixo: "10 33785819",
        perfil: 1
    },
    {
        id: 2,
        nome: "Matilda",
        email: "matilda@matilda.com",
        telefone_fixo: "10 33154516",
        perfil: 2
    }
]

const perfis = [
    { id: 1, descricao: "GOLD" },
    { id: 2, descricao: "SILVER" }
]

const typeDefs = gql`

    type Usuario {
        id: ID
        nome: String
        email: String
        telefone: String
        perfil: Perfil
    }

    type Perfil {
        id: Int
        descricao: String
    }

    type Query {
        usuario(id: Int): Usuario
        perfis: [Perfil]

    }
`

const resolvers = {
    
    Usuario: {
        perfil(usuario) {
            const lista = perfis.find(i => i.id == usuario.perfil)
            return lista
        },
        telefone(obj) {
            const telefone = obj.telefone_fixo
            return telefone
        }
    },
    Query: {
        usuario(_, args) {
            return db.find(db => db.id === args.id)
        },
        perfis() {
            return perfis
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})
//execute
server.listen()