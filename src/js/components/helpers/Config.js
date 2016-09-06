class Config {
	constructor() {
		this.production = false,
		this.online = navigator.onLine,
		this.isHTTPS = window.location.protocol === "https:"
	}
}

module.exports = Config;