import diff_match_patch from "./DMPLibrary.js"

class DMPBuilder {
	constructor() {
	    this.DMP = new diff_match_patch;
	    this.Match_Threshold = 1.0;
	    this.Match_Distance = 1000;
	    return this;
	}
}

module.exports = DMPBuilder;