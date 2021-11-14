const { gql } = require("apollo-server")

// schema defintion
module.exports = gql`
	type Query {
		sessions: [Session]
		sessionById(id: ID): Session
		sessionsFilterByAnyParam(
			id: ID
			itle: String
			description: String
			startsAt: String
			endsAt: String
			room: String
			day: String
			format: String
			level: String
		): [Session]
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