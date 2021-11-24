module.exports = {
	Query: {
		sessions: (parent, args, { dataSources }, info) => {
			return dataSources.sessionAPI.getSessions()
		},
		sessionById: (parent, { id }, { dataSources }, info) => {
			return dataSources.sessionAPI.getSessionById(id)
		},
		sessionsFilterByAnyParam: (parent, args, { dataSources }, info) => {
			return dataSources.sessionAPI.getSessionsFilterByAnyParam(args)
		},
		speakers: (parent, args, { dataSources }, info) => {
			return dataSources.speakerAPI.getSpeakers()
		},
		speakerById: (parent, { id }, { dataSources }, info) => {
			return dataSources.speakerAPI.getSpeakerById(id)
		},
	},
}
