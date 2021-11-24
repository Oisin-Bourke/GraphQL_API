const { ApolloServer, gql } = require("apollo-server")
const SessionAPI = require("./data_sources/sessions")
const SpeakerAPI = require("./data_sources/speakers")

const typeDefs = require("./schema.js")
const resolvers = require("./resolvers.js")

const dataSources = () => ({
	sessionAPI: new SessionAPI(),
	speakerAPI: new SpeakerAPI()
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
