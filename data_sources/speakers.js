//wire up REST data source
const { RESTDataSource } = require("apollo-datasource-rest")

// this data source is layers on top of a REST API
class SpeakerAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = "http://localhost:3000/speakers"
	}

	async getSpeakerById(id) {
		const data = await this.get(`/${id}`)
		return data
	}

	async getSpeakers() {
		const data = await this.get("/")
		return data
	}
}

module.exports = SpeakerAPI
