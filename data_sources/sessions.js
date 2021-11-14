const sessions = require("../data/sessions.json")
const { DataSource } = require("apollo-datasource")
const _ = require("lodash")

// plug db source here...
class SessionAPI extends DataSource {
	constructor() {
		super()
	}

	initialize(config) {}

	getSessions() {
		return sessions
	}

	getSessionById(id) {
		const session = _.filter(sessions, { id: parseInt(id) })
        return session[0]
	}

	getSessionsFilterByAnyParam(args) {
		return _.filter(sessions, args)
	}
}

module.exports = SessionAPI
