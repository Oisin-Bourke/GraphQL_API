module.exports = {
	toggleFavSession: (parent, { id }, { dataSources }, info) => {
		return dataSources.sessionAPI.toggleFavSession(id)
	},
	updateSessionLevel: (parent, { id, level }, { dataSources }, info) => {
		return dataSources.sessionAPI.updateSessionLevel(id, level)
	},
	addNewSession: (parent, {session}, {dataSources}, info) => {
		return dataSources.sessionAPI.addNewSession(session)
	}
}
