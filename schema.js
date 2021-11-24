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
		speakers: [Speaker]
		speakerById(id: ID): Speaker
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
	type Speaker {
		id: ID!
		bio: String
		name: String
		sessions: [Session]
	}
`