const _ = require("lodash")

module.exports = {
    // this needs to async as wired to RESTful API promise
    async speakers(session, args, { dataSources }) {
        // the rest api speaker result is getting cached here so only one call to GET /speakers required
        const speakers = await dataSources.speakerAPI.getSpeakers()
        const returns = speakers.filter((speaker) => {
            return _.filter(session.speakers, { id: speaker.id }).length > 0
        })
        return returns
    },
}
