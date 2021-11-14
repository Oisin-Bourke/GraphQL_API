const { ApolloServer, gql } = require("apollo-server")
const SessionAPI = require("./data_sources/sessions")

const typeDefs = require("./schema.js")
const resolvers = require("./resolvers.js")

const dataSources = () => ({
	sessionAPI: new SessionAPI(),
})

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources,
	introspection: true,
	playground: true,
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`GraphyQL appollo server running at ${url}`)
})
