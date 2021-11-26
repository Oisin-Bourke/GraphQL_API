module.exports = {
	toggleFavSession: (parent, { id }, { dataSources }, info) => {
		return dataSources.sessionAPI.toggleFavSession(id)
	},
	updateSessionLevel: (parent, { id, level }, { dataSources }, info) => {
		return dataSources.sessionAPI.updateSessionLevel(id, level)
	},
}
