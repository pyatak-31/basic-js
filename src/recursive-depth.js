const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  count = 1;
	
	calculateDepth(array) {
		return this.count + (Array.isArray(array) ? array.reduce((max, item) => Math.max(max, this.calculateDepth(item)), 0) : -1);
	}
};