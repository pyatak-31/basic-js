const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
	for (let i of arr) {
		for (let j of i) {
			if (j == "^^") {
				count++;
			}
		}	
	}
	return count;
};
