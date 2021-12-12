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

	toggleFavSession(id) {
		const session = _.filter(sessions, { id: parseInt(id) })
		session[0].favorite = !session[0].favorite
        return session[0]
	}

	updateSessionLevel(id, level) {
		const session = _.filter(sessions, {id: parseInt(id)} )
		session[0].level = level
		return session[0]
	}

	addNewSession(session) {
		session.id = 12
		sessions.push(session)
		return session
	}
}

module.exports = SessionAPI
