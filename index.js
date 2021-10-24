const { ApolloServer, gql } = require("apollo-server")
const SessionAPI = require("./data_sources/sessions")
//const sessions = require(".data/sessions.json")

// schema defintion
const typeDefs = gql`
	type Query {
		sessions: [Session]
        sessionsById(id: ID): Session
	}
	type Session {
		id: ID!
		title: String!
		description: String
		startsAt: String
		endsAt: String
		room: String
		day: String
		format: String
		track: String @deprecated(reason: "Not using this field...")
		level: String
	}
`
const resolvers = {
	Query: {
		sessions: (parent, args, { dataSources }, info) => {
			return dataSources.sessionAPI.getSessions()
		},
        sessionsById: (parent, {id}, {dataSources}, info) => {
            return dataSources.sessionAPI.getSessionsById(id)
        }
	},
}

const dataSources = () => ({
	sessionAPI: new SessionAPI(),
})

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`GraphyQL appollo server running at ${url}`)
})
